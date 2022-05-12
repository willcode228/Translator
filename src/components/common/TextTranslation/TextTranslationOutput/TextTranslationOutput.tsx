import React, {useState} from 'react';
import styles from './TextTranslationOutput.module.css';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {ReactComponent as CopyIcon} from "../../../../assets/copy.svg";

export const TextTranslationOutput = () => {
	const {targetText, loading} = useTypedSelector(state => state.translate);
	const [isCopySuccess, setIsCopySuccess] = useState<boolean | 10>(10);

	return (
		<div
			className={`
				${styles['output']}
				${targetText.length >= 120 && styles['output-small']}
				${targetText.length > 0 && styles['output-active']}
			`}
		>
			<div>
				{!loading && !targetText && 'Translation'}

				{loading
					? 'Loading result...'
					: targetText
				}
			</div>


			<button
				disabled={!loading && !targetText}
				className={`
					${styles['copy-btn']} 
					${isCopySuccess && isCopySuccess !== 10 && styles['copy-btn-success']}
					${!isCopySuccess && styles['copy-btn-error']}
				`}
				onClick={() => {
					navigator.clipboard.writeText(targetText)
						.then(() => setIsCopySuccess(true))
						.catch(() => setIsCopySuccess(false))
						.finally(() => {
							setTimeout(() => {
								setIsCopySuccess(10);
							}, 1000);
						})
				}}
			>
				<CopyIcon />
			</button>

		</div>
	);
};
