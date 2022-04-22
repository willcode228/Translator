import React from 'react';
import {TextTranslationInput} from "./TextTranslationInput/TextTranslationInput";
import {TextTranslationOutput} from "./TextTranslationOutput/TextTranslationOutput";
import styles from './TextTranslation.module.css';

export const TextTranslation = () => {
	return (
		<div className={styles['translation-area']}>
			<TextTranslationInput/>
			<TextTranslationOutput/>
		</div>
	);
};
