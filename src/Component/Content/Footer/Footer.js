import React, { useState } from 'react'
import './Footer.css'
import * as AiIcons from 'react-icons/ai'

const Content  = [
    ['เพลงใหม่', ['KRYPTONITE', 'เมะ', 'เจ้าความรัก', 'Stay (Explicit)', 'แน่ใจไหม [JOOX Original]', 'นินจา', 'double take', 'Be Okay', 'จะกลับไปดีกับเขาก็บอก', 'พัทยา (Pattaya)']],
    ['เพลงใหม่', ['LALISA - LISA', 'MONEY - LISA', 'I ไม่ O (IXO) - Billkin', 'Romantic Sunday - Car, the garden', 'Wonderland Party - INTO1', 'Fountains - Drake, Tems', 'โซโล่ดัง ปังทุกเพลง', 'เพลงสากลฟังสบาย', 'คิดถึงคอนเสิร์ต', 'คิดถึงคอนเกา', 'คิดถึงคอนเสิร์ต [Inter]']],
    ['เพลงล่าสุด', ['LALISA', 'Shivers', 'Walker Racing League', 'Don\'t Go Yet (Major Lazer Remix)', 'If You Say the Word', 'Why', 'WITH ME AGAIN']],
    ['ศิลปินยอดฮิต', ['BTS เพลง', 'Labanoon เพลง', 'Three Man Down เพลง', 'The TOYS เพลง', 'F.HERO เพลง', 'Tilly Birds เพลง', 'มนต์แคน แก่นคูน เพลง', 'UrboyTJ เพลง', 'Cocktail เพลง', 'NONT TANONT เพลง', 'BLACKPINK เพลง', 'Bodyslam เพลง']],
    ['เพลงฮิต', ['Thailand Top 100', 'Top 50 International', 'Top Karaoke Hits', 'TOP 50 ลูกทุ่ง', 'ไทบ้าน', 'Top 50 K-Pop', 'TOP 50 FAMILY & KIDS', 'JOOX', 'TIKTOK MUSIC CHART']],
    ['JOOX สุดๆไปเลย 5', ['เพลย์ลิสต์รวมที่สุดตลอด 5 ปี', 'เพลงดัง ปังทั่วไทย', 'เพลงดัง ปังทั่วโลก', 'เพลงเกา ที่เราปลื้ม', 'เพลงดัง ปังลั่นทุ่ง', 'เพลงขวัญใจชาว JOOX', 'เปิดตัวปัง ดังทันที', 'ขาประจำ JTMA', 'เพลงฮิตติดจอ', 'เพลงฮิตติดค้อนทั่งโกลน', 'เพลงดังฟังตั้งแต่ต้นตระกูล']]
]

const Footer = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='footer-con'>
            <div className='footer-con2'>
                <div className='main-footer-text-con'>
                    <div className='main-footer-text' onClick={() => setOpen(!open)}>
                        {open ? 'Hide sitemap' : 'Show sitemap'}
                    </div>
                    <div className='footer-arrow'>
                        {open ? <AiIcons.AiOutlineUp size={13} /> : <AiIcons.AiOutlineDown size={13} />}
                    </div>
                </div>
                {open &&
                    <div className='footer-content-container'>
                        <div className='footer-row'>
                            {Content.map((item, index) => (
                                <div className='footer-content' key={index}>
                                    <div className='footer-content-topic'>
                                        {item[0]}
                                    </div>
                                    <div className='footer-content-list-container'>
                                        {item[1].map((song, index) => (
                                            <span className='span-text' key={index}>
                                                <span className='span-text2'>{song}</span>
                                                {index === item[1].length-1 ? null : <small style={{color: '#959595', marginLeft: '5px', marginRight: '5px'}}>|</small>}
                                                {/* <small style={{color: '#959595', marginLeft: '5px', marginRight: '5px'}}>|</small> */}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Footer
