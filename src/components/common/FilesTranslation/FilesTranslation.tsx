import React, {useState} from 'react';
import styles from './FilesTranslation.module.css';
import {ReactComponent as FileIcon} from '../../../assets/file-translate.svg';
import {useDispatch} from "react-redux";
import {setTargetTranslate} from "../../../store/Translate/thunks";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {setTargetTranslateFileSuccess} from "../../../store/Translate/actions";

export const FilesTranslation = () => {
	const dispatch = useDispatch();
	const {loading, targetFile} = useTypedSelector(state => state.translate);
	const [file, setFile] = useState<FileList | null>(null);
	const fileSize = file?.item(0)?.size || 0;
	const formatFileSize = fileSize > 999 ? `${Math.round(fileSize / 1000)} КБ` : `${fileSize} Б`;

	if(file) {
		return (
			<div className={styles['files']}>
				<div className={styles['files__container']}>

					<div className={styles['files__card']}>
						<FileIcon/>

						<div className={styles['files__card-box']}>
							<h2>{file.item(0)?.name}</h2>
							<p>{formatFileSize}</p>
						</div>

						<button
							className={styles['files__card-delete']}
							onClick={() => setFile(null)}
						>
							×
						</button>
					</div>

					<button
						disabled={loading}
						className={styles['files-btn']}
						onClick={() => {
							if(targetFile) {
								document.location.href = targetFile;
								dispatch(setTargetTranslateFileSuccess(''));
								setFile(null);
							} else {
								dispatch(setTargetTranslate(file))
							}
						}}
					>
						{targetFile
							? 'Скачать перевод'
							: !loading ? 'Перевести' : 'Идет перевод'
						}
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className={styles['files']}>
			<label className={styles['files-label']}>
				<input type="file" accept=".docx" onChange={e => setFile(e.target.files)}/>

				<h2>Выберите документ</h2>
				<p>
					Загрузите файл DOCX, PDF, PPTX или XLSX.
					<a href="https://support.google.com/translate/answer/2534559?ref_topic=7011659&hl=ru" target={'_blank'}> Подробнее…</a>
				</p>
				<p className={styles['files-btn']}>Выбрать на компьютере</p>
			</label>
		</div>
	);
};
