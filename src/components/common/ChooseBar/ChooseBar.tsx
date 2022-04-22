import React, {FC, useEffect, useState} from 'react';
import {chooseState, ILang, menuType} from "../../../types/common/common";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import styles from './ChooseBar.module.css';
import LangMenu from "../../shared/LangMenu/LangMenu";
import {langType} from "../../../consts/langType";
import {setNewSourcePanelLangs, setNewTargetPanelLangs} from "../../../store/DetectorLang/thunks";
import {useDispatch} from "react-redux";
import {isEmpty} from "lodash";

interface IChooseBar {
	isChooseActive: chooseState;
	setIsChooseActive: (obj: chooseState) => void;
}

export const ChooseBar: FC<IChooseBar> = ({isChooseActive, setIsChooseActive}) => {
	const {active, type} = isChooseActive;
	const dispatch = useDispatch();
	const {langs} = useTypedSelector(state => state.supportedLang);
	const [chooseNewActive, setChooseNewActive] = useState(0);
	const {
		targetPanelLangs, sourcePanelLangs,
		targetActiveItem, sourceActiveItem,
	} = useTypedSelector(state => state.detectorLang);

	useEffect(() => {
		if(!isEmpty(langs) && !isEmpty(targetPanelLangs) && !isEmpty(sourcePanelLangs)) {
			setChooseNewActive(langs.findIndex((lang: ILang) => {
				const choosenType = type === langType.TARGET
					? targetPanelLangs[targetActiveItem]
					: sourcePanelLangs[sourceActiveItem];

				return lang.code === choosenType.code;
			}));
		}
	}, [langs, targetPanelLangs, sourcePanelLangs, targetActiveItem, sourceActiveItem, type]);

	const setNewActiveLang = (index: number) => {
		type === langType.TARGET
			? dispatch(setNewTargetPanelLangs(langs[index]))
			: dispatch(setNewSourcePanelLangs(langs[index]));

		setIsChooseActive({type, active: false});
	}

	if(!active) {
		return null;
	}

	return (
		<div className={styles['bar']}>
			<LangMenu
				langs={langs}
				isVertical={true}
				menuName={'bigLangChooseMenu'}
				activeLang={chooseNewActive}
				setActiveLang={setNewActiveLang}
			/>
		</div>
	);
};
