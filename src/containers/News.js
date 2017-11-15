import React from 'react'
import { Link } from 'react-router-dom'

function News() {
  return (
    <div>
      ニュース<br />
      <br />
      <Link to="/">ホーム</Link><br />
      <br />
      <Link to="/about">アバウト</Link><br />
      <br />
      <Link to="/counter">カウンター</Link><br />
      {/*
      <div className="page__odd page__padding">
        <div className="container">
          <div className="row mod-review">
            <div className="col-sm-12 col-md-8">
              <h2 className="page-subtitle">評価とレビュー</h2>
              <ul className="mod-review__head">
                <li className="mod-review__head-star">
                  <a href="#"><i className="fa fa-star mr2 is-checked"></i><i className="fa fa-star mr2 is-checked"></i><i className="fa fa-star mr2 is-checked"></i><span className="star-harf fa fa-star"><i className="fa fa-star mr2 is-default"></i></span><i className="fa fa-star mr2 is-default"></i></a>
                </li>
                <li className="mod-review__head-rating">4.55</li>
                <li>
                  <a href="#" className="space-head__list-number">10件のレビュー</a>
                </li>
              </ul>
              <div className="mod-review__box mod-review__box-space">
                <div className="mod-review__line clearfix">
                  <a href="#"><img src="http://dummyimage.com/192x192/999/fff" alt="" className="is-hover mod-review__guest-icon" /></a>
                  <div className="mod-review__box-head">
                    <h3 className="mod-review__guest-name link__subcolor"><a href=""><span>Morimoto Hideki</span></a></h3>
                    <ul className="mod-review__list">
                      <li>2015年10月実施</li>
                      <li>利用目的：<a href="#">会議・研修</a></li>
                      <li>利用形態：<a href="#">宿泊</a></li>
                      <li className="mod-review__list-space">スペース：<a href="#">【表参道1分】おしゃれ女子必見♪ 表参道・青山</a></li>
                    </ul>
                  </div>
                  <div className="mod-review__box-text">
                    <p>この度はありがとうございました。落ちついた雰囲気で、集中して作業が行えました。また機会があったら利用させていただければと思います。</p>
                  </div>
                </div>

                <div className="mod-review__line clearfix">
                  <a href="#"><img src="http://dummyimage.com/192x192/999/fff" alt="" className="is-hover mod-review__guest-icon" /></a>
                  <div className="mod-review__box-head">
                    <h3 className="mod-review__guest-name link__subcolor"><a href=""><span>Morimoto Hideki</span></a></h3>
                    <ul className="mod-review__list">
                      <li>2015年10月実施</li>
                      <li>利用目的：<a href="#">会議・研修</a></li>
                      <li>利用形態：<a href="#">1日レンタル</a></li>
                      <li className="mod-review__list-space">スペース：<a href="#">【表参道1分】おしゃれ女子必見♪ 表参道・青山</a></li>
                    </ul>
                  </div>
                  <div className="mod-review__box-text">
                    <p>この度はありがとうございました。落ちついた雰囲気で、集中して作業が行えました。また機会があったら利用させていただければと思います。</p>
                      <div className="mod-review__res-line clearfix">
                        <a href="#"><img src="http://dummyimage.com/192x192/999/fff" alt="" className="is-hover mod-review__host-icon" /></a>
                        <div className="mod-review__resbox-head">
                          <h4 className="mod-review__host-name link__subcolor"><a href="">スペースマーケット オフィス</a>から返信</h4>
                        </div>
                        <div className="mod-review__resbox-text">
                          <p>千田様、きれいにご利用いただきましてありがとうございました！！また是非次の機会もご利用ください！！</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="mod-review__line clearfix">
                  <a href="#"><img src="http://dummyimage.com/192x192/999/fff" alt="" className="is-hover mod-review__guest-icon" /></a>
                  <div className="mod-review__box-head">
                    <h3 className="mod-review__guest-name link__subcolor"><a href=""><span>Morimoto Hideki</span></a></h3>
                    <ul className="mod-review__list">
                      <li>2015年10月実施</li>
                      <li>利用目的：<a href="#">会議・研修</a></li>
                      <li>利用形態：<a href="#">宿泊</a></li>
                      <li className="mod-review__list-space">スペース：<a href="#">【表参道1分】おしゃれ女子必見♪ 表参道・青山</a></li>
                    </ul>
                  </div>
                  <div className="mod-review__box-text">
                    <p>友人との撮影と会食目的でお借りしました。とても古い日本家屋で趣があります、玄関から土間を横目に居間に上がるところや広い縁側などとても素敵です。表通りから中が見えにくいというのも個人的には嬉しかったです。ホスト様にはいろいろご相談にのっていただきましてとても楽しく過ごせました。</p>
                    <p className="mod-more"><a href="#">詳しく見る</a></p>
                  </div>
                </div>
              </div>
              <div className="mod-more__link">
                <a href="#" className="button-stay-pink pt13 pb13 w200">レビューをもっと見る</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  )
}

export default News
