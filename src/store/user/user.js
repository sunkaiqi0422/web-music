import getters from './getter';
import mutations from './mutations';
import actions from './actions';

const user = {
  state: {
    searchHistory: [], // 搜索历史
    playHistory: [], // 播放历史
    favoriteSongs: [], // 喜欢歌单
    editState: false
  },
  getters,
  mutations,
  actions
};

export default user;
