import React, {useState} from 'react';
import styles from './FilesTranslation.module.css';
import {ReactComponent as FileIcon} from '../../../assets/file-translate.svg';

export const FilesTranslation = () => {
	const [file, setFile] = useState<FileList | null>(null);
	// console.log(file?.item(0).);

	if(file) {
		return (
			<div className={styles['files']}>
				<div className={styles['files__container']}>

					<div className={styles['files__card']}>
						<FileIcon/>

						<div className={styles['files__card-box']}>
							<h2>{file.item(0)?.name}</h2>
							<p>{file.item(0)?.size} Б</p>
						</div>

						<button
							className={styles['files__card-delete']}
							onClick={() => setFile(null)}
						>
							×
						</button>
					</div>

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
