import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react';
import { ModalContent } from 'shared';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const downloadAvmPaperFile = () => {
    alert('Downloaded');
  }

  return (
    <div className={styles.container}>
      <ModalContent
        title={<div className="float-left ml-20">Model trang của vendor</div>}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        size={'base'}
      >
        <div className='flex flex-row'>
          <div className='flex-1'>
            Nhân viên Techcombank sẽ liên hệ để lập hồ sơ vay cho bạn<br />
            Trong thời gian sớm nhất. Ngoài ra, bạn có thể tải Phiếu tư<br />
            vấn giá tại đây
            <br /><br />
            <button
              className="bg-[#2F6BFF1A] text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center"
              onClick={downloadAvmPaperFile}
            >
              <svg
                className="fill-[#0876ff] w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Tải phiếu tư vấn giá</span>
            </button>
          </div>
        </div>
      </ModalContent>
    </div>
  )
}

export default Home
