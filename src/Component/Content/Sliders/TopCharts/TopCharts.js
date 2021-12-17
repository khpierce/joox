import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import '../Styles.css'
import TopChartsContent from './TopChartsContent'
import * as IoIcons from 'react-icons/io5'

const Container = styled.div`
    display: flex;
    background: ${({background}) => background};
    height: 120px;
`

const IMAGE = [
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvMy80L2U2YmNhZTgxMTg4ZWU2ZTQwOTU3YmVmZjdlOGI0NDM0LmpwZw==.jpg', 'rgb(178, 144, 114)', 'Thailand Top 100', ['ต่อจากนี้เพลงรักทุกเพลงจะเป็นของเธอเท่านั้น - NO ONE ELSE', 'บานปลาย (Best wishes) - BOWKYLION', 'เอาปากกามาวง - BELL WARISARA']],
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvOS83Lzk5ZDlhNzU4OTM2ODkxMTFjZjU0YWU5MDdlYWFjNTk3LmpwZw==.jpg', 'rgb(176, 168, 164)', 'Top 50 International', ['All I Want for Christmas Is You - Mariah Carey', 'Merry Christmas - Ed Sheeran,Elton John', 'MONEY - LISA']],
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZC8zLzc4NTg2N2ExYmY4YzgyODBjZTVhNzM5MjUzNDRjMmQzLmpwZw==.jpg', 'rgb(190, 141, 177)', 'Top Karaoke Hits', ['พิง (เพลงประกอบละคร กระเช้าสีดา) - NONT TANONT', 'ต่อจากนี้เพลงรักทุกเพลงจะเป็นของเธอเท่านั้น - NO ONE ELSE', 'บานปลาย (Best wishes) - BOWKYLION']],
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvOC9lLzRiMTIxNmE5YzVjM2U4NmRiN2I4OWJmNzA3ODJlMThlLmpwZw==.jpg', 'rgb(20, 16, 14)', 'Top 50 Indie', ['Dara - Blackbeans', 'ดูดฝุ่น (Home.) - Morvasu,Violette Wautier', 'อย่างน้อย ( Sunset ) - safeplanet']],
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvOC9mLzVhYTNjZGVlYzRkZjE3NjM3NzQ1MDExOTkzMmQ4MzhmLmpwZw==.jpg', 'rgb(38, 39, 54)', 'Top 50 ลูกทุ่ง | ไทบ้าน', ['กอดทิพย์ - มนต์แคน แก่นคูน', 'ชอบที่เธอเป็นเธอ - วงแทมมะริน', 'อัศวินน้ำตา - น้ำแข็ง ทิพวรรณ']],
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvNi80L2IyOWYxMGNkM2Q2MDllZTI3NDhmZThiMmNhMzY0MzY0LmpwZw==.jpg', 'rgb(38, 38, 38)', 'Top 50 K-Pop', ['MONEY - LISA', 'LALISA - LISA', 'Life Goes On - BTS']],
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvMS9mLzc5MTdiMDEzMTQ4MTZmMGFlZmZhZmI2YmI1OTdmODFmLmpwZw==.jpg', 'rgb(207, 41, 117)', 'THTOP100 2021', ['ดึงดัน [JOOX Original] - Cocktail,ตั๊ก ศิริพร', 'Undo [JOOX Original] - ป๊อบ ปองกูล,WONDERFRAME', 'จำเลยรัก (Defendant Of Love) - F.HERO,Txrbo']],
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZi9kL2E1Y2EzNjljN2Y0YTcwZmNhMzcwMjhiMDNmYjM1YWZkLmpwZw==.jpg', 'rgb(135, 139, 111)', 'Top 200 Test', ['คำแพง - แซ็ค ชุมแพ', 'คู่คอง (เพลงประกอบละคร นาคี) - ก้อง ห้วยไร่', 'คำว่าฮักกัน มันเหี่ยถิ่มไส - มนต์แคน แก่นคูน']],
    ['https://s.isanook.com/jo/0/rp/rc/w240h240/ya0xa0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvOS80LzM4NmU5ZGE0NDI1MWNkYjAzN2I5YjVhZWMwNDk5MDk0LmpwZw==.jpg', 'rgb(13, 11, 10)', 'JOOX | TIKTOK Music Chart', ['เอาปากกามาวง - BELL WARISARA', 'ຕື່ນຈາກຝັນ ( ตื่นจากฝัน ) - BAY6IX', 'abcdefu (Explicit) - Gayle']]
]

const TopCharts = () => {

    const setting = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        nextArrow: <IoIcons.IoChevronForwardSharp />,
        prevArrow: <IoIcons.IoChevronBackSharp />
    }
    return (
        <div className='slider-container3'>
            <Slider {...setting}>
                {IMAGE.map((url, index) => (
                    <Container background={url[1]} key={index}>
                        <TopChartsContent url={url[0]} topic={url[2]} data={url[3]} />
                    </Container>
                ))}
            </Slider>
        </div>
    )
}

export default TopCharts
