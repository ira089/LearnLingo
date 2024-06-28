import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaStar, FaHeart } from "react-icons/fa6";
import styles from './teacherItem.module.css'

 const TeacherItem = ({item, isVariant}) => {
   
    const {variant} = isVariant;
    const favorite = false;
    const{avatar_url, name, surname, languages, levels, rating, reviews, id,
        price_per_hour, lessons_done, lesson_info, conditions, experience} = item;

        const handleClick = () =>  {
            console.log('first')
        }

  return (
    <li key={id} id={id} className={styles.wrapItem}>
        <div className={styles.wrapAvatar}>
            <img className={styles.avatar} alt={name} src={avatar_url}/>
        </div>

        <div className={styles.wrapCart}>
            <div className={styles.wrapTitls}>
                <div className={styles.nameLanguages}>
                    <span className={styles.span}>Languages</span>
                    <h3 className={styles.name}>{`${name} ${surname}`}</h3>
                </div>
                <ul className={styles.wrapDetails}>
                    <li className={styles.listItem}>
                        <IoBookOutline size={16}/>Lessons online
                    </li>
                    <li className={styles.listItem}>
                        Lessons done:{lessons_done}
                    </li>
                    <li className={styles.listItem}>
                        <FaStar color='#ffc531'size={16}/>
                        Rating:{rating}
                    </li>
                    <li className={styles.listItem}>
                        Price/1hour:<span>{price_per_hour}$</span>
                    </li>
                </ul>
                <div>
                    {variant && 
                    <button className={styles.btnHeart}  onClick={handleClick} type='submit'>
                    {favorite ?  <FaHeart size={24} color=' #f4c550;'/> :  <FaRegHeart size={24}/>}
                    </button> }
                </div>
            </div>
            <div className={styles.text} >
                <p className={styles.textP}><span >Speaks:</span><span className={styles.speaks}>{languages.join(', ')}</span></p>
                <p className={styles.textP}><span >Lesson Info:</span>{lesson_info} </p>
                <p className={styles.textP}><span >Conditions:</span>{conditions}</p>
            </div>
            <button type='button' className={styles.btnRead}>Read more</button>
            <ul className={styles.listLevel}>
                {levels.map(level => (
                <li className={styles.itemLevel}>
                    {level}
                </li>))}
            </ul>
        </div>
    </li>
  )
}

export default TeacherItem
