import React, {useState} from 'react';
import styles from './TextTranslationOutput.module.css';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {ReactComponent as CopyIcon} from "../../../../assets/copy.svg";

export const TextTranslationOutput = () => {
	const {target, loading} = useTypedSelector(state => state.translate);
	const [isCopySuccess, setIsCopySuccess] = useState<boolean | 10>(10);

	return (
		<div
			className={`
				${styles['output']}
				${target.length >= 120 && styles['output-small']}
				${target.length > 0 && styles['output-active']}
			`}
		>
			<div>
				{!loading && !target && 'Translation'}

				{loading
					? 'Loading result...'
					: target
				}
			</div>


			<button
				disabled={!loading && !target}
				className={`
					${styles['copy-btn']} 
					${isCopySuccess && isCopySuccess !== 10 && styles['copy-btn-success']}
					${!isCopySuccess && styles['copy-btn-error']}
				`}
				onClick={() => {
					navigator.clipboard.writeText(target)
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
