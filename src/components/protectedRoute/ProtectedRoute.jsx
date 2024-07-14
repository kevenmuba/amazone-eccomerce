import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { DataContext } from '../DataProvider/DataProvider';

export const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate()
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } })
    }
  }, [user])
  return children
}
/*
1,children yemibalew <protectedRoute>children</ProtectedRoute> mehal wust yalewun yiweklal
2,msg login sayareg pay lemareg yemimokrewun message lemestet new 
3,redirect degmo pay yaderegew beketay sigeba wede kefelebet bota endiwesdew lemareg new */