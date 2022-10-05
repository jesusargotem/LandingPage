import { Baselayout } from '@/Layouts';
import { Home } from '@/Pages/Home';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

export interface HomeRouterInterface {}

const HomeRouter : React.FC<HomeRouterInterface> = () => {
	return (
		<Routes>
			<Route path="/*" element={<Baselayout />}/>
			<Route index element={<Home />}/>
		</Routes>
	)
};

export default HomeRouter;
