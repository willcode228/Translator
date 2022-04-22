import React, {useEffect} from 'react';
import './App.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {routes} from "../routes/routes";
import {routePathes} from "../routes/consts";
import Navbar from "../components/common/Navbar/Navbar";
import styles from './App.module.css';
import LangDetector from "../components/common/LangDetector/LangDetector";
import {useDispatch} from "react-redux";
import {setSupportedLang} from "../store/SupportedLang/thunks";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSupportedLang());
	}, [dispatch]);

	return (
		<>
			<Navbar />

			<div className={styles['translate-box']}>
				<LangDetector />
				<Routes>
					{routes.map(({key, path, Element}) => (
						<Route key={key} path={path} element={<Element/>}/>
					))}

					<Route path={'/'} element={<Navigate to={routePathes.TEXT}/>}/>
					<Route path={'*'} element={<Navigate to={routePathes.NOT_FOUND}/>}/>
				</Routes>
			</div>
		</>
	);
};

export default App;
