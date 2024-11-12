<template>
  <div data-v-038f6593="" class="sem10">
    <div data-v-52de4d2a="" data-v-038f6593="" class="layout">
      <div data-v-b699a0ca="" data-v-52de4d2a="" class="header-container">
        <div data-v-b699a0ca="" class="content">
          <h1 data-v-b699a0ca="" ka="header-home-logo" class="logo"><img data-v-b699a0ca=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAmCAYAAACxmsVNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZBQzVGMUUwMDAxNDExRThBM0U0RTE1MDBCMzNFRTU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZBQzVGMUUxMDAxNDExRThBM0U0RTE1MDBCMzNFRTU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkFDNUYxREUwMDE0MTFFOEEzRTRFMTUwMEIzM0VFNTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkFDNUYxREYwMDE0MTFFOEEzRTRFMTUwMEIzM0VFNTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4HrU4tAAAMp0lEQVR42uxd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"
              alt="" class="logo-img"><span data-v-b699a0ca="" class="hidden">{{ authStore.getUserName }}</span></h1>
        </div>
      </div>
      <div data-v-038f6593="" data-v-52de4d2a="" class="top-wrap">
        <div data-v-038f6593="" data-v-52de4d2a="" class="container">
          <div data-v-038f6593="" data-v-52de4d2a="" class="theme">
            <div data-v-038f6593="" data-v-52de4d2a="" class="title">海量优质人才，在线约面</div>
            <div data-v-038f6593="" data-v-52de4d2a="" class="desc">找工作，上BOSS直聘直接谈</div><img data-v-038f6593=""
              data-v-52de4d2a="" src="./BOSS直聘-找工作上BOSS直聘直接谈！招聘求职找工作！_files/banner.97f904e9.png" alt=""
              class="block banner-img">
          </div>
          <div data-v-038f6593="" data-v-52de4d2a="" class="sign-wrap shake">
            <div data-v-14148192="" data-v-038f6593="" class="boss-sign-form" data-v-52de4d2a="">
              <div data-v-14148192="" class="boss-btn-switch">
                <div data-v-14148192="" class="boss-switch-tip"> 微信快速注册在这里 </div>
              </div>
              <div data-v-14148192="" class="sms-form-wrapper">
                <h3 class="title">一键注册BOSS直聘</h3><span class="sub-title">首次验证通过即注册BOSS直聘账号</span>
                <ul class="identity-tab">
                  <li ka="signup_geek_tab_click" class="">我要找工作</li>
                  <li ka="signup_boss_tab_click" class="active">我要招聘</li>
                </ul>
                <div class="sms-form-row">
                  <div class="phone-input-wrapper"><span class="dropdown-select">+86</span><span class="ipt-wrap"><input
                        type="tel" placeholder="手机号"></span>
                    <div class="dropdown-menu">
                      <ul>
                        <li><span class="num">+86</span>中国大陆</li>
                        <li><span class="num"></span>非中国大陆手机号</li>
                      </ul>
                    </div>
                  </div><!---->
                </div>
                <div class="sms-form-row">
                  <div class="sms-input-wrapper"><span class="ipt-wrap"><input type="text" ka="signup-sms"
                        placeholder="短信验证码" maxlength="6"></span>
                    <div ka="send_sms_code_click" class="btn-sms"><span>发送验证码</span></div>
                    <div class="verify-row-box" style="opacity: 0; min-height: unset; height: 0px; overflow: hidden;">
                    </div>
                  </div><!---->
                </div>
                <div class="sms-form-btn"><button type="submit" ka="signup_submit_button_click"
                    class="sure-btn">注册</button></div>
                <div data-v-14148192="" class="switch-login-method"><svg data-v-14148192=""
                    xmlns="http://www.w3.org/2000/svg" width="13.984" height="13">
                    <path data-v-14148192=""
                      d="M13.392 6.992H.592a.492.492 0 010-.984h12.8a.492.492 0 110 .984zM11.915 12.9H8.961a.492.492 0 110-.985h2.954c.272 0 .493-.22.493-.492V8.962a.492.492 0 11.984 0v2.461c0 .814-.662 1.477-1.477 1.477zm-7.384 0H2.069a1.479 1.479 0 01-1.477-1.477V8.962a.492.492 0 11.985 0v2.461c0 .272.22.492.492.492h2.462a.492.492 0 110 .985zM1.084 4.53a.492.492 0 01-.492-.492V1.577C.592.763 1.255.1 2.07.1h2.462a.492.492 0 010 .985H2.069a.493.493 0 00-.492.492v2.461c0 .272-.22.493-.493.493zm11.816 0a.492.492 0 01-.492-.492V1.577a.493.493 0 00-.493-.492H8.961a.492.492 0 110-.985h2.954c.815 0 1.477.663 1.477 1.477v2.461c0 .272-.22.493-.492.493z"
                      fill="currentColor"></path>
                    <path data-v-14148192=""
                      d="M1.084 4.63q-.245 0-.418-.173-.174-.173-.174-.419V1.577q0-.652.463-1.115Q1.417 0 2.069 0h2.462q.245 0 .418.174.174.173.174.418 0 .246-.174.42-.173.173-.418.173H2.069q-.162 0-.277.115-.115.115-.115.277v2.461q0 .246-.174.42-.173.173-.419.173zm11.816 0q-.246 0-.42-.173-.172-.173-.172-.419V1.577q0-.162-.115-.277-.115-.115-.278-.115H8.961q-.245 0-.419-.174Q8.37.838 8.37.592q0-.245.173-.418Q8.716 0 8.962 0h2.953q.652 0 1.115.462.462.463.462 1.115v2.461q0 .246-.173.42-.174.173-.42.173zm-11.816-.2q.163 0 .278-.114.115-.115.115-.278V1.577q0-.245.174-.419.173-.173.418-.173h2.462q.162 0 .277-.115.115-.115.115-.278 0-.162-.115-.277Q4.693.2 4.531.2H2.069q-.57 0-.973.404-.404.404-.404.973v2.461q0 .163.115.278.115.115.277.115zm11.816 0q.163 0 .277-.114.115-.115.115-.278V1.577q0-.57-.404-.973Q12.485.2 11.915.2H8.961Q8.8.2 8.684.315q-.115.115-.115.277 0 .163.115.278.115.115.277.115h2.954q.245 0 .42.173.173.174.173.419v2.461q0 .163.114.278.115.115.278.115zm.492 2.662H.592q-.245 0-.419-.173Q0 6.745 0 6.5t.173-.419q.174-.173.42-.173h12.8q.245 0 .418.173.173.174.173.419t-.173.419q-.173.173-.419.173zm0-.2q.163 0 .278-.115.114-.115.114-.277 0-.163-.114-.277-.115-.115-.278-.115H.592q-.162 0-.277.115Q.2 6.338.2 6.5q0 .162.115.277.115.115.277.115h12.8zM4.531 13H2.069q-.652 0-1.114-.462-.463-.463-.463-1.115V8.962q0-.246.174-.42.173-.173.418-.173.246 0 .42.174.173.173.173.419v2.461q0 .162.115.277.115.115.277.115h2.462q.245 0 .418.174.174.173.174.419 0 .245-.174.419-.173.173-.418.173zm7.384 0H8.961q-.245 0-.419-.173-.173-.174-.173-.42 0-.245.173-.418.174-.174.42-.174h2.953q.163 0 .278-.115.115-.114.115-.277V8.962q0-.246.173-.42.173-.173.419-.173.245 0 .419.174.173.173.173.419v2.461q0 .652-.462 1.115-.463.462-1.115.462zm-7.384-.2q.162 0 .277-.115.115-.115.115-.277 0-.163-.115-.278-.115-.115-.277-.115H2.069q-.245 0-.418-.173-.174-.174-.174-.419V8.962q0-.163-.115-.278-.115-.115-.278-.115-.162 0-.277.115-.115.115-.115.278v2.461q0 .57.404.973.404.404.973.404h2.462zm7.384 0q.57 0 .973-.404.404-.404.404-.973V8.962q0-.163-.115-.278-.114-.115-.277-.115-.163 0-.278.115-.114.115-.114.278v2.461q0 .245-.174.419-.174.173-.419.173H8.961q-.162 0-.277.115-.115.115-.115.278 0 .162.115.277.115.115.277.115h2.954z"
                      fill-rule="evenodd" fill="currentColor"></path>
                  </svg><span data-v-14148192="" class="text">已有账号登录</span></div>
                <div class="login-policy-wrapper"><span class="agree-policy-wrapper"><input type="checkbox"
                      class="agree-policy"><i class="checkbox-edging"></i></span>已阅读并同意BOSS直聘 <a
                    href="https://about.zhipin.com/agreement?id=registerprotocol" target="_blank"
                    class="user-agreement">《用户协议》</a><a href="https://about.zhipin.com/agreement?id=personalinfopro"
                    target="_blank" class="user-agreement">《隐私政策》</a>，允许BOSS直聘统一管理本人账号信息 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-v-038f6593="" data-v-52de4d2a="" class="bottom-wrap">
        <div data-v-941216c6="" data-v-038f6593="" class="bottom-wrap" data-v-52de4d2a="">
          <div v-for="category in categoryList" :key="category.id" data-v-941216c6="" class="card"><img
              data-v-941216c6="" :src="category.img" alt="" class="block float-left img">
            <dl data-v-941216c6="" class="overflow-hidden content">
              <dt data-v-941216c6="" class="title">{{ category.title }}</dt>
              <dd data-v-941216c6="" class="text">{{ category.description }}</dd>
            </dl>
          </div>
        </div>
      </div>
      <div data-v-08a78d8c="" data-v-52de4d2a="" class="footer-container footer">
        <div data-v-08a78d8c="" class="content">
          <div data-v-08a78d8c="" class="info"><span data-v-08a78d8c="">客服电话：400-065-5799</span><em data-v-08a78d8c=""
              class="separator"></em><span data-v-08a78d8c="">工作时间：8:00-22:00</span><em data-v-08a78d8c=""
              class="separator"></em><a data-v-08a78d8c=""
              href="https://www.zhipin.com/web/common/protocol/hr-service.html" target="_blank"
              class="link">人力资源服务许可证</a><em data-v-08a78d8c="" class="separator"></em><a data-v-08a78d8c=""
              target="_blank" href="https://www.zhipin.com/activity/cc/businesslicense.html?ka=link-businesslicense"
              class="link">营业执照</a><em data-v-08a78d8c="" class="separator"></em><span data-v-08a78d8c=""
              class="phone">朝阳区人社局监督电话<!----></span></div>
          <div data-v-08a78d8c="" class="copyright"><span data-v-08a78d8c="">Copyright © 2024 BOSS直聘</span><em
              data-v-08a78d8c="" class="separator"></em><a data-v-08a78d8c="" href="https://beian.miit.gov.cn/"
              target="_blank" class="link">京ICP备14013441号-5</a><span data-v-08a78d8c="" class="ml-2">京ICP证150923号</span>
          </div>
        </div>
      </div>
    </div><input data-v-038f6593="" type="hidden" id="page_key_name" value="sem10_page">
  </div><input type="hidden" id="page_key_name" value="cpc_sem10_login">

</template>

<script setup lang="ts">
import { useAuthStore } from '@/core/stores/authStore';
import { ref } from 'vue'

const authStore = useAuthStore();
authStore.requestAuth();

defineProps<{ msg: string }>()

const categoryList = ref<Array<Category>>([
  {
    id: 1000,
    title: '视频面试',
    description: '不受地域限制，不受传统的上班时间影响，即可连线全球优秀人才。支持3v1多人群面，在线商议结果，进一步提升面试效率',
    img: './BOSS直聘-找工作上BOSS直聘直接谈！招聘求职找工作！_files/item-1.380a420f.png',
  },
  {
    id: 1001,
    title: '语音聊天',
    description: 'BOSS可选择和求职者语音沟通，能及时快速查看是否符合职位要求',
    img: './BOSS直聘-找工作上BOSS直聘直接谈！招聘求职找工作！_files/item-1.380a420f.png',
  },
  {
    id: 1002,
    title: '聊天发送位置',
    description: '可向求职者发送公司定位或工作地址，在线查看通勤路线与时间，求职者一目了然',
    img: './BOSS直聘-找工作上BOSS直聘直接谈！招聘求职找工作！_files/item-1.380a420f.png',
  },
  {
    id: 1003,
    title: '线上offer',
    description: '线上OFFER一键速递，可对沟通后的求职者发送线上OFFER，便捷高效揽获求职者',
    img: './BOSS直聘-找工作上BOSS直聘直接谈！招聘求职找工作！_files/item-1.380a420f.png',
  },
  {
    id: 1004,
    title: '求职者转发',
    description: 'BOSS可以将求职者通过站内、站外推荐给相关同事',
    img: './BOSS直聘-找工作上BOSS直聘直接谈！招聘求职找工作！_files/item-1.380a420f.png',
  },
])

type Category = {
  id: number;
  title: string;
  description: string;
  img: string;
}
</script>


<style scoped>
.bottom-wrap[data-v-941216c6] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.card[data-v-941216c6] {
  width: 586px;
  height: 210px;
  margin-bottom: 25px;
  border-radius: 8px;
  -webkit-box-shadow: 0 5px 14px 0 rgba(0, 0, 0, .1);
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, .1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 30px;
  background: #fff
}

.card .img[data-v-941216c6] {
  width: 142px;
  margin-left: 30px;
  display: block;
  float: left
}

.card .content[data-v-941216c6] {
  padding: 0 30px 0 30px
}

.card .content .title[data-v-941216c6] {
  font-size: 28px;
  line-height: 42px;
  color: #202329;
  font-weight: 700;
  padding-bottom: 13px
}

.card .content .text[data-v-941216c6] {
  font-size: 18px;
  color: #51586d;
  line-height: 30px
}

.top-wrap[data-v-038f6593] {
  background: url(/sem/static/img/bottom-side.4f4e16e8.png) #12ada9 repeat-x 0 100%;
  height: 626px
}

.top-wrap .container[data-v-038f6593] {
  width: 1200px;
  margin: auto;
  padding-top: 65px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.top-wrap .container .theme[data-v-038f6593] {
  width: 790px;
  color: #fff
}

.top-wrap .container .theme .title[data-v-038f6593] {
  font-size: 42px;
  font-weight: 600;
  padding-left: 122px
}

.top-wrap .container .theme .desc[data-v-038f6593] {
  margin-top: 15px;
  font-size: 20px;
  padding-left: 226px;
  height: 10px;
  line-height: 10px
}

.top-wrap .container .theme .banner-img[data-v-038f6593] {
  margin-top: -14px;
  width: 694px;
  display: block
}

.top-wrap .container .sign-wrap[data-v-038f6593] {
  width: 410px;
  background-color: #fff;
  border-radius: 8px;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  box-shadow: 0 0 20px rgba(0, 0, 0, .1)
}

.top-wrap .container .sign-wrap[data-v-038f6593] .login-policy-wrapper {
  margin-top: 15px
}

.bottom-wrap[data-v-038f6593] {
  width: 1200px;
  margin: auto;
  margin-top: 122px;
  margin-bottom: 122px
}

@media screen and (max-width:1440px) {
  .sem10 .scan-app-wrapper .app-load-box {
    right: -142px
  }

  .sem10 .scan-help-wrapper {
    left: 200px
  }
}

.sem10 .boss-sign-form {
  padding-top: 30px
}

.sem10 .boss-sign-form .sms-form-btn,
.sem10 .boss-sign-form .sms-form-row:nth-of-type(2) {
  margin-top: 30px
}

.sem10 .boss-sign-form .identity-tab,
.sem10 .boss-sign-form .login-policy-wrapper,
.sem10 .boss-sign-form .sms-form-row:first-of-type {
  margin-top: 20px
}

.sem10 .boss-sign-form .scan-wx-wrapper {
  margin-top: 45px
}

.sign-wrap.shake {
  -webkit-animation: sem-shake .8s ease-in;
  animation: sem-shake .8s ease-in
}

@-webkit-keyframes sem-shake {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1)
  }

  10%,
  20% {
    -webkit-transform: scale(.9) rotate(-3deg);
    transform: scale(.9) rotate(-3deg)
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg)
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg)
  }

  to {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0)
  }
}

@keyframes sem-shake {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1)
  }

  10%,
  20% {
    -webkit-transform: scale(.9) rotate(-3deg);
    transform: scale(.9) rotate(-3deg)
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg)
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg)
  }

  to {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0)
  }
}
</style>
