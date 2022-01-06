import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';

export default function PathRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SingleMovie />} />
    </Routes>
  )
}
