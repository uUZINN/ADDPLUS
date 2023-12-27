import React from 'react'
import Header from '../layout/Header'
import MypageSide from './MypageSide'
import tabler_coins from '../../assets/img/mypage/tabler_coins.png'
import tabler_coins_1 from '../../assets/img/mypage/tabler_coins-1.png'
import tabler_coins_2 from '../../assets/img/mypage/tabler_coins-2.png'


const MypagePoint = () => {
    return (
        <>
            <Header />
            <div className='score__Wrap'>
                <MypageSide />

                <div className='main'>
                    <div className='mypage_point'>
                        <div className="point_top_btn">
                            <button className='guide_btn'>이용안내</button>
                            <button className='point_btn'>충전하기</button>
                        </div>
                        <div className="point_payment">
                            <div className="point_total">
                                <img src={tabler_coins} />
                                <div className="point_tit">
                                    <h3>총 보유 포인트</h3>
                                    <em>2,541P</em>
                                </div>
                            </div>
                            <div className="point_account">
                                <img src={tabler_coins_1} />
                                <div className="point_tit">
                                    <h3>적립 포인트</h3>
                                    <em>2,541P</em>
                                </div>
                            </div>
                            <div className="point_charge">
                                <img src={tabler_coins_1} />
                                <div className="point_tit">
                                    <h3>충전 포인트</h3>
                                    <em>2,541P</em>
                                </div>
                            </div>
                            <div className="point_used">
                                <img src={tabler_coins_2} />
                                <div className="point_tit">
                                    <h3>사용 포인트</h3>
                                    <em>- 2,541P</em>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="score_title point_title">
                        <h3>이용 내역</h3>
                    </div>

                    <div className="point_list">
                        <table>
                            <tr>
                                <th>적립/사용 내용</th>
                                <th>일시</th>
                                <th>사용</th>
                                <th>적립</th>
                                <th>포인트 잔액</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MypagePoint