import React, {useEffect, useState} from 'react';
import LangMenu from "../../shared/LangMenu/LangMenu";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setSourceActiveItem, setTargetActiveItem} from "../../../store/DetectorLang/thunks";
import styles from './LangDetector.module.css';
import {ReactComponent as ExchangeIcon} from "../../../assets/exchang.svg";
import {langType} from "../../../consts/langType";
import {chooseState} from "../../../types/common/common";
import {ChooseBar} from "../ChooseBar/ChooseBar";
import ButtonOpenChoose from "./ButtonOpenChoose/ButtonOpenChoose";

const LangDetector = () => {
	const {
		targetActiveItem, targetPanelLangs,
		sourceActiveItem, sourcePanelLangs
	} = useTypedSelector(state => state.detectorLang)
	const dispatch = useDispatch();

	const [isChooseActive, setIsChooseActive] = useState<chooseState>({active: false, type: ''});

	const setSourceActiveLang = (newActiveSourceItem: number) => {
		dispatch(setSourceActiveItem(newActiveSourceItem));
	}

	const setTargetActiveLang = (newActiveTargetItem: number) => {
		dispatch(setTargetActiveItem(newActiveTargetItem));
	}

	const exchangeActiveLang = () => {
		// TODO make this function add language to active if panel don't have
		dispatch(setTargetActiveItem(sourceActiveItem));
		dispatch(setSourceActiveItem(targetActiveItem));
	}

	return (
		<div className={styles['detector']}>

			<LangMenu
				langs={sourcePanelLangs}
				menuName={'sourcePanelMenu'}
				activeLang={sourceActiveItem}
        setActiveLang={setSourceActiveLang}
			/>

			<ButtonOpenChoose
				type={langType.SOURCE}
				isChooseActive={isChooseActive}
				setIsChooseActive={setIsChooseActive}
			/>

			<button
				className={styles['detector__exchange-btn']}
				onClick={exchangeActiveLang}
			>
				<ExchangeIcon />
			</button>

			<LangMenu
				langs={targetPanelLangs}
				menuName={'targetPanelMenu'}
				activeLang={targetActiveItem}
				setActiveLang={setTargetActiveLang}
			/>

			<ButtonOpenChoose
				type={langType.TARGET}
				isChooseActive={isChooseActive}
				setIsChooseActive={setIsChooseActive}
			/>

			<ChooseBar
				isChooseActive={isChooseActive}
				setIsChooseActive={setIsChooseActive}
			/>
		</div>
	);
};

export default LangDetector;