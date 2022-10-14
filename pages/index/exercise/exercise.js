const app = getApp()
Page({
    data: {
        finish: 0,
        check: 0,
        questionlist: [{
          "question": "1.2021年2月20日，党史学习教育动员大会在北京召开。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。他强调，在全党开展党史学习教育，是党中央立足党的百年历史新起点、统筹中华民族伟大复兴战略全局和世界百年未有之大变局、为动员全党全国满怀信心投身全面建设社会主义现代化国家而作出的重大决策。全党同志要做到（          ） 。",
          "choices": [
              {
                  "label": "A",
                  "value": "学史明理、学史增信、学史崇德、学史力行"
              },
              {
                  "label": "B",
                  "value": "学史明理、学史崇德、学史增信、学史力行"
              },
              {
                  "label": "C",
                  "value": "学史明理、学史崇德、学史力行、学史增信"
              },
              {
                  "label": "D",
                  "value": "学史增信、学史明理、学史崇德、学史力行"
              }
          ],
          "answer": "A"
      },
      {
          "question": "2.在党史学习教育动员大会上，习近平总书记提出（       ）的总体要求，强调全党同志要做到学史明理、学史增信、学史崇德、学史力行。扎实推进党史学习教育，最根本的是深刻领会、贯彻落实习近平总书记重要讲话精神和部署要求，确保高标准高质量完成学习教育各项任务。",
          "choices": [
              {
                  "label": "A",
                  "value": "学党史、办实事、悟思想、开新局"
              },
              {
                  "label": "B",
                  "value": "学党史、悟思想、办实事、开新局"
              },
              {
                  "label": "C",
                  "value": "学党史、悟思想、开新局、办实事"
              },
              {
                  "label": "D",
                  "value": "学党史、开新局、悟思想、办实事"
              },
          ],
          "answer": "B"
      },
      {
          "question": "中国共产党第十九次全国代表大会，是在全面建成小康社会决胜阶段、中国特色社会主义进入（     ）的关键时期召开的一次十分重要的大会。",
          "choices": [
              {
                  "label": "A",
                  "value": "新时期"
              },
              {
                  "label": "B",
                  "value": "新阶段"
              },
              {
                  "label": "C",
                  "value": "新征程"
              },
              {
                  "label": "D",
                  "value": "新时代"
              },
          ],
          "answer": "D"
      },
      {
          "question": "4. 十九大的主题是：不忘初心，（     ），高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。",
          "choices": [
              {
                  "label": "A",
                  "value": "继续前进"
              },
              {
                  "label": "B",
                  "value": "牢记使命"
              },
              {
                  "label": "C",
                  "value": "方得始终"
              },
              {
                  "label": "D",
                  "value": "砥砺前行"
              },
          ],
          "answer": "B"
      },
      {
          "question": "5. 中国共产党人的初心和使命，就是为中国人民(        )，为中华民族(      )。这个初心和使命是激励中国共产党人不断前进的根本动力。",
          "choices": [
              {
                  "label": "A",
                  "value": "谋幸福，谋未来"
              },
              {
                  "label": "B",
                  "value": "谋生活，谋复兴"
              },
              {
                  "label": "C",
                  "value": "谋幸福，谋复兴"
              },
              {
                  "label": "D",
                  "value": "谋生活，谋未来"
              },
          ],
          "answer": "C"
      },
      {
          "question": "6. 坚持反腐败无禁区、全覆盖、零容忍，坚定不移“打虎”、“拍蝇”、“猎狐”，(       )的目标初步实现，(       )的笼子越扎越牢，(        )的堤坝正在构筑，反腐败斗争压倒性态势已经形成并巩固发展。",
          "choices": [
              {
                  "label": "A",
                  "value": "不敢腐　不能腐　不想腐"
              },
              {
                  "label": "B",
                  "value": "不能腐　不敢腐　不想腐"
              },
              {
                  "label": "C",
                  "value": "不想腐　不敢腐　不能腐"
              },
              {
                  "label": "D",
                  "value": "不敢腐　不想腐　不能腐"
              },
          ],
          "answer": "A"
      },
      {
          "question": "7. 经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的(           )。",
          "choices": [
              {
                  "label": "A",
                  "value": "未来方向"
              },
              {
                  "label": "B",
                  "value": "未来方位"
              },
              {
                  "label": "C",
                  "value": "历史方向"
              },
              {
                  "label": "D",
                  "value": "历史方位"
              },
          ],
          "answer": "D"
      }
        ],
    },
    onLoad() {
        var pxToRpxScale = app.globalData.pxToRpxScale
        var StatusHeight = app.globalData.ktxStatusHeight * pxToRpxScale;
        var navigationHeight = app.globalData.navigationHeight * pxToRpxScale;
        var HeadBar = (app.globalData.ktxStatusHeight + app.globalData.navigationHeight) * pxToRpxScale
        var ShowHeight = (app.globalData.ktxWindowHeight - app.globalData.ktxStatusHeight) * pxToRpxScale;
        var allHeight = HeadBar + ShowHeight;
        var bottom = 44 * pxToRpxScale
        this.setData({
            StatusHeight: StatusHeight,
            navigationHeight: navigationHeight,
            HeadBar: HeadBar,
            ShowHeight: ShowHeight,
            bottom: bottom,
            allHeight: allHeight
        })
        this.initanswer()
    },
    initanswer() {
        var questionlist = this.data.questionlist
        var answerlist = []
        for (var i = 0; i < questionlist.length; i++) {
            answerlist.push("")
        }
        this.setData({
            answerlist: answerlist
        })
    },
    change(e) {
        console.log(e);
        this.setData({
            ["answerlist[" + e.currentTarget.dataset.temp + "]"]: e.detail.value
        })
        console.log(this.data.answerlist)
    },
    check() {
        this.setData({ check: 1 })
    },
    formSubmit_() {
        var answerlist = this.data.answerlist;
        for (var i = 0; i < answerlist.length; i++) {
            if (answerlist[i] == "") {
                wx.showToast({
                    title: '第' + (i + 1) + '题未作答',
                    icon: 'none',
                    duration: 2000
                })
                return
            }
        }
        this.setData({
            finish: 1,
            check: 0
        })
        wx.showToast({
            title: '提交成功',
            icon: 'none',
            duration: 2000
        })
        var score = 0;
        for (var i = 0; i < answerlist.length; i++) {
            if (answerlist[i] == this.data.questionlist[i].answer) {
                score++;
            }
        }
        this.setData({
            score
        })
    }
})