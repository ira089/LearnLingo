import React, { useEffect, useState, useRef} from 'react'
// import {  useDispatch, useSelector } from 'react-redux';
// import * as teacherSelectors from '../../redux/teacherSelectors';
// import * as teacherOperations from '../../redux/teacherOperations';
// import { getTeacher } from '../../redux/teacherClice'; 
import styles from './teachersList.module.css';
import TeacherItem from 'components/TeacherItem/TeacherItem'
import Button from 'components/Button/Button';
import {  ref,  query, limitToFirst, startAfter, getDatabase, orderByKey, get} from "firebase/database";


 const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const initialLoad = useRef(true);

  const database = getDatabase();
  const fetchTeachers = async (key = null) => {
    setLoading(true);
    let teachersQuery;
    if (key) {
      teachersQuery = query(ref(database, 'teachers'), orderByKey(), startAfter(key), limitToFirst(4));
    } else {
      teachersQuery = query(ref(database, 'teachers'), orderByKey(), limitToFirst(4));
    }

    const snapshot = await get(teachersQuery);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const teachersList = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      setTeachers((prevTeachers) => [...prevTeachers, ...teachersList]);
      setLastKey(teachersList.length ? teachersList[teachersList.length - 1].id : null);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (initialLoad.current) {
      fetchTeachers();
      initialLoad.current = false; // Сбрасываем флаг после первой загрузки
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [database]);

  
  
  // onValue(ref(database, '/teachers'), (s) => {
    //     if(s.exists()) teachersArr = s.val();
    //     console.log(teachersArr)
    // })
    
  const loadMoreTeachers = () => {
    if (lastKey) {
      fetchTeachers(lastKey);
    }
  }; 
  console.log(teachers)

  const isVariant = { variant: true};
  const elements = teachers.map(item => (
    <TeacherItem
      key={item.id}
      item={item}
      isVariant={isVariant}
    />
  ));

  const isItems = Boolean(teachers.length);



  return (
    <div className={styles.wraplist}>
      {loading && <p>Loading...</p>}
      {isItems && <ul >{elements}</ul>}
      {!loading && lastKey && 
      <div className={styles.bntLoad}>
         <Button type='button' onClick={loadMoreTeachers}>Load More</Button>
      </div>}
      
    </div>
  )
}

export default TeachersList


