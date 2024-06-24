import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import ModalLoginIn from 'components/ModalLogIn/ModalLoginIn';
import ModalRegistration from 'components/ModalRegistration/ModalRegistration';
import styles from './header.module.css';
import { MdOutlineLogin } from "react-icons/md";
import { IconContext } from "react-icons";


const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setModalType(null);
    setIsModalOpen(false);
  };

  return (
    <>
       <section className={styles.header}>
          <div className={styles.logo}>
             <p className={styles.circle}></p>           
             <p> LearnLingo</p>
          </div>

          <div className={styles.navigation}>
            <NavLink className={styles.linkNavigation} to="/">Home</NavLink>
            <NavLink className={styles.linkNavigation} to="/teachers">Teachers</NavLink>
          </div>

          <div className={styles.registration}>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
              <button onClick={() => openModal('login')} className={styles.btnLogin} type='button'>
                 <MdOutlineLogin color='#8a8a89' size={20}/>
                 <span>Log in</span>
               </button>
            </IconContext.Provider>
         
            <button onClick={() => openModal('register')}className={styles.btnRegistration} type='button'>
             Registration
            </button>
          </div>
        
        </section>
        
        {modalType === 'login' && (
           <Modal isOpen={isModalOpen} onClose={closeModal} width={566} height={506}>
             <ModalLoginIn onClose={closeModal}/>
           </Modal>
        )}

        {modalType === 'register' && (
            <Modal isOpen={isModalOpen} onClose={closeModal} width={566} height={600}>
              <ModalRegistration onClose={closeModal}/>
            </Modal>
        )}
            
       
        {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
             {modalType === 'login' && (<ModalLoginIn onClose={closeModal}/>)}
             {modalType === 'register' && (<ModalRegistration onClose={closeModal}/>)}
        </Modal> */}
       
    </>
   
    
    
  );
};
export default Header;



    

