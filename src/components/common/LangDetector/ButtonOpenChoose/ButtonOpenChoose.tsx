import React, {FC} from 'react';
import styles from "./ButtonOpenChoose.module.css";
import {chooseState, menuType} from "../../../../types/common/common";
import {ReactComponent as ArrowDownIcon} from '../../../../assets/arrow-down.svg';

interface IButtonOpenChoose {
	type: menuType;
	isChooseActive: chooseState;
	setIsChooseActive: any;
}

const ButtonOpenChoose: FC<IButtonOpenChoose> = ({
	isChooseActive,
	setIsChooseActive,
	type
}) => {
	return (
		<button
			className={styles['lang-menu-btn']}
			onClick={() => setIsChooseActive((prevState: chooseState): chooseState => ({
					active: !prevState.active, type
				})
			)}
		>
			<ArrowDownIcon
				style={{transform: `rotate(${isChooseActive.active && isChooseActive.type === type ? 180 : 0}deg)`}}
			/>
		</button>
	);
};

export default ButtonOpenChoose;