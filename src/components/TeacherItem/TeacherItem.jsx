import React from 'react'
import styles from './teacherItem.module.css'

 const TeacherItem = () => {
  return (
    <div className={styles.wrap}>
        <div className={styles.wrapAvatar}>
            <img alt='avatar' src=''/>
        </div>

        <div className={styles.wrapCart}>
            <div className={styles.wrapTitls}>
                <div className={styles.nameLanguages}>
                    <span className={styles.span}>Languages</span>
                    <h3 className={styles.name}>Jane Smith</h3>
                </div>
                <ul className={styles.wrapDetails}>
                    <li>online</li>
                    <li>Lessons done: 1098</li>
                    <li>Rating: 4.8</li>
                    <li>Price / 1 hour: 30$</li>
                </ul>
                <div>herrs</div>
            </div>

            <p><span>Speaks:</span> German, French</p>
            <p><span>Lesson Info:</span> Lessons are structured to cover grammar, vocabulary, and practical usage of the language</p>
            <p><span>Conditions:</span>Welcomes both adult learners and teenagers (13 years and above).Provides personalized study plans</p>
            <button>Read more</button>

            <ul>
                <li>#A1 Beginner</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default TeacherItem
