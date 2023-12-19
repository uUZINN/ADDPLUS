import React from 'react'
import CommSide from './CommSide'
import { Link } from 'react-router-dom'

const Comm = () => {
    return (
        <>
            <div className="comm__Wrap">
                <CommSide />
                <div className='main'>
                    <div className="comm__top">
                        <div className="comm_tab">
                            <ul>
                                <li className='main-tab active'>인기</li>
                                <li className='main-tab'>최신</li>
                            </ul>
                        </div>
                        <div className="comm__search">
                            <input type="text" className='search' />
                            <ul>
                                <li><a href="/commwrite">글쓰기</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="comm__bottom">
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                        <div className="comm__box">
                            <div className='box'>
                                <div className='emoji'>
                                    <div className='emoticon'></div>
                                    <div className="like__btn"></div>
                                </div>
                                <div className="comm__header">
                                    <div className="cate">HOT</div>
                                    <h2>입시 어쩌고 저쩌고</h2>
                                </div>
                                <div className="comm__text">
                                    <p>입시에 관련된 아무말입니다. 입시에 관련된 아무말입니다. 아무말 아무말 아무말</p>
                                    <p className='anothor'>정새영</p>
                                </div>
                            </div>
                            <div className="comm__info">
                                <div>
                                    <div className="watch">
                                        <div></div>
                                        <p>54</p>
                                    </div>
                                    <div className="like">
                                        <div></div>
                                        <p>987</p>
                                    </div>
                                </div>
                                <div className="date">2023.12.06</div>
                            </div>
                        </div>
                    </div>
                    <ul class="pagination">
                        <li className='left'><Link to="/"></Link></li>
                        <li><Link to="/" className='active'>1</Link></li>
                        <li><Link to="/">2</Link></li>
                        <li><Link to="/">3</Link></li>
                        <li><Link to="/">4</Link></li>
                        <li><Link to="/">5</Link></li>
                        <li className='right'><Link to="/"></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Comm