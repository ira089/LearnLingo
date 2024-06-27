import React, { useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import * as teacherSelectors from '../../redux/teacherSelectors';
// import * as teacherOperations from '../../redux/teacherOperations';
import { getTeacher } from '../../redux/teacherClice'; 
// import styles from './teachersList.module.css';
import TeacherItem from 'components/TeacherItem/TeacherItem'
import {database} from '../../firebase/firebase'
import {  ref, onValue } from "firebase/database";


 const TeachersList = () => {

// console.log(fireTeacherAll())
  // const database = getDatabase(app);
//  console.log(database);
 let teachersArr = [];
 onValue(ref(database, '/teachers'), (s) => {
    if(s.exists()) teachersArr = s.val();
    console.log(teachersArr)
})



  const dispatch = useDispatch();
dispatch(getTeacher({...teachersArr}))

  const {items} = useSelector(teacherSelectors.selectTeacher)
  // useEffect(() => {
    
  //   dispatch(getTeacher({...teachersArr}))

  // }, []);
console.log(items)

  return (
    <TeacherItem/>
  )
}

export default TeachersList
