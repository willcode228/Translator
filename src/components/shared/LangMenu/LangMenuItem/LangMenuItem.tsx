import React, {FC} from 'react';
import {ILang} from "../../../../types/common/common";
import styles from './LangMenuItem.module.css';

interface ILangMenuItem {
	itemInfo: ILang;
	menuName: string;
	isActive: boolean;
	index: number;
	setActiveLang: (active: number) => void;
}

const LangMenuItem: FC<ILangMenuItem> = ({itemInfo, isActive, setActiveLang, menuName, index}) => {
	return (
		<label className={`${styles['lang-menu-item']} ${isActive ? styles['checked']: ''}`}>
			<input
				type="checkbox"
				name={menuName}
				checked={isActive}
				onChange={() => isActive ? null : setActiveLang(index)}
				className={styles['lang-menu-item-input']}
			/>
			<h3 className={styles['lang-menu-item-name']}>
				{itemInfo.name}
			</h3>
		</label>
	);
};

export default LangMenuItem;