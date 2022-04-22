import React, {FC, MouseEventHandler} from 'react';
import {chooseState, ILang, menuType} from "../../../types/common/common";
import LangMenuItem from "./LangMenuItem/LangMenuItem";
import styles from './LangMenu.module.css';

interface ILangMenu {
	langs: ILang[];
	menuName: string;
	activeLang: number;
	setActiveLang: (active: number) => void;
	isVertical?: boolean;
}

const LangMenu: FC<ILangMenu> = ({
	langs,
	activeLang,
	setActiveLang,
	menuName,
	isVertical= false
}) => {
	return (
		<div className={`${styles['lang-menu']} ${isVertical && styles['lang-menu-vertical']}`}>
			{langs.map((itemInfo, index) =>
				<LangMenuItem
					key={itemInfo.code}
					index={index}
					itemInfo={itemInfo}
					menuName={menuName}
					setActiveLang={setActiveLang}
					isActive={langs[activeLang].code === itemInfo.code}
				/>
			)}
		</div>
	);
};

export default LangMenu;