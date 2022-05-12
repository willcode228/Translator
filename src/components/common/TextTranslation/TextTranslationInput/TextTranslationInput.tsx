import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import styles from './TextTranslationInput.module.css';
import {setSourceTranslate, setTargetTranslate} from "../../../../store/Translate/thunks";
import _ from "lodash";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

export const TextTranslationInput = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const {targetActiveItem, sourceActiveItem, sourcePanelLangs, targetPanelLangs} = useTypedSelector(state => state.detectorLang);
	const target = targetPanelLangs[targetActiveItem];
	const source = sourcePanelLangs[sourceActiveItem];
	const debounceGetTranslate = useCallback(_.debounce((q: string) => {
		dispatch(setTargetTranslate(q));
	}, 1000), []);

	useEffect(() => {
		if(value) {
			dispatch(setTargetTranslate(value));
		}
	}, [target, source]);

	const handleChange = (q: string) => {
		setValue(q);
		dispatch(setSourceTranslate(q));
		debounceGetTranslate(q);
	}

	return (
		<div className={styles['input']}>
			<textarea
				wrap={'on'}
				value={value}
				maxLength={500}
				spellCheck={false}
				autoCorrect={'off'}
				autoComplete={'off'}
				aria-expanded={false}
				autoCapitalize={'off'}
				onChange={(e) => handleChange(e.target.value)}
				className={`
					${styles['input-textarea']}
					${value.length >= 120 && styles['input-textarea-small']}
				`}
			/>

			<button
				onClick={() => handleChange('')}
				className={`
					${styles['input-btn']}
					${value.length > 0 && styles['input-btn-active']}
				`}
			>
				✕
			</button>

			<p className={styles['input-value-length']}>
				{value.length} / 5000
			</p>
		</div>
	);
};