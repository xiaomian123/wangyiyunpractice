// import styled from 'styled-components-vue';
// const Wrapper = styled.div``;

export default {
  render() {
    return (
      <Wrapper>
        <div class="w-screen h-screen bg-slate-100" st>
          {/* <!-- 背景图 --> */}
          <div class=" w-[100vw] h-[82vw] bg-red-400 flex">
            {/* <!-- 头部 --> */}
            <div class="w-[92vw] h-[5vw] ml-[4vw] mt-[12vw] flex justify-between items-center">
              <Icon
                icon="ep:back"
                color="white"
                class="w-[5vw] h-[5vw]"
              />
              <div class="w-[12vw] h-[3.8vw] text-[2vw] bg-[#fff] rounded-[5vw] text-center ">
                照片墙
              </div>
              <Icon
                icon="mingcute:more-2-line"
                color="white"
                class="w-[5vw] h-[5vw]"
              />
            </div>
          </div>
          {/* <!-- 资料部分 --> */}
          <div class="w-[100vw] h-screen">
            {/* <!-- 个人资料 --> */}
            <div class="w-[92vw] h-[56vw] ml-[4vw] mt-[-7vw]">
              <div class="w-[92vw] h-[10vw]">
                <div></div>
                <img src="" alt="" class="w-[17vw] h-[17vw] rounded-[50%]" />
                <div class="w-[20vw] h-[7vw] text-[3vw] text-[#fff]">
                  TA的照片
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  },
};
