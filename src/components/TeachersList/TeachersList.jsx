import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as teacherSelectors from '../../redux/teacherSelectors';
import * as teacherOperations from '../../redux/teacherOperations';
// import styles from './teachersList.module.css';
import TeacherItem from 'components/TeacherItem/TeacherItem'
import {fireTeacherAll} from '../../../src/firebase'


 const TeachersList = () => {

console.log(fireTeacherAll())
  // const database = getDatabase(app);
//  console.log(database);
//  let teachersArr = [];
//  onValue(ref(database, '/teachers'), (s) => {
//     if(s.exists()) teachersArr = s.val();
//     console.log(teachersArr)
// })



  const dispatch = useDispatch();
  const {items} = useSelector(teacherSelectors.selectTeacher)
  useEffect(() => {
    dispatch(teacherOperations.getTeachersThunk());
  }, [dispatch]);
console.log(items)
  return (
    <TeacherItem/>
  )
}

export default TeachersList
