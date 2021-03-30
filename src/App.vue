<template>
    <div id="app">

        <div class="my_desc">

            <a-row>
                <a-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                    <div>
                        <h1>陈秋燕</h1>
                        <h1>HR人力资源管理</h1>
                    </div>
                </a-col>
                <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"/>
                <a-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                    <div class="contact_box">
                        <p>
                            <a-icon type="mail" style="margin-right: 9px;"/>
                            2864402540@qq.com
                        </p>
                        <p>
                            <a-icon type="mobile" style="margin-right: 10px;"/>
                            13823481223
                        </p>
                    </div>
                </a-col>
            </a-row>

            <div class="school_box">
                <h1>教育背景</h1>
                <p class="date">2017.3 - 2020.1</p>
                <p class="name">顺德职业技术学院</p>
                <p class="lesson">护理专业 专科</p>
            </div>

            <div>

            </div>
        </div>

        <div class="lay_content">

            <a-row>

                <a-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                    <div>
                        <h1>个人能力</h1>
                        <a-timeline>
                            <a-timeline-item
                                    v-for="(item, index) in skills"
                                    :key="item + index">{{ item }}
                            </a-timeline-item>
                        </a-timeline>
                    </div>

                    <div>
                        <h1>工作经历</h1>
                        <Company :exp="expCompany1"></Company>
                        <Company :exp="expCompany2"></Company>
                    </div>
                </a-col>

                <a-col :xs="2" :sm="2" :md="2" :lg="4" :xl="2"/>

                <a-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                    <div>
                        <h1>经历总结</h1>

                        <Experiences :exp="expProject1"/>

                    </div>
                </a-col>

            </a-row>

        </div>

    </div>
</template>

<script>
    import Experiences from "@/components/Experiences";
    import Company from "@/components/Company";

    export default {
        name: 'App',
        components: {
            Experiences,
            Company
        },
        data() {
            return {

                // 个人技能
                skills: [
                    '熟练办理入离职手续',
                    '处理突发事件、组织协调管理人事调动',
                    '熟悉国家和地方人力资源相关法律法规',
                    '熟练使用各种办公软件,如word excel等',
                    '对html,css等互联网前端技术有了解',
                    '管理员工日常考勤,加班,请假,报销管理等',
                    '具备细心，耐心的工作态度，并善于组织协调',
                    '有丰富的员工入职培训,团队文化建设,绩效考核,员工激励,劳动关系处理的经验',

                ],

                // 工作经验
                expCompany1: {
                    time: '2017.09 - 2020.06',
                    title: '顺德新容奇医院',
                    color: '#722ed1',
                    items: [
                        '任住院部护士,处理医患关系,接待病人以及病人家属,做好诊疗前的双向沟通与相关治疗准备',
                    ]
                },

                expCompany2: {
                    time: '2020.07 - 至今',
                    title: '深圳优脂整容美容医院',
                    color: '#6699CC',
                    items: [
                        '发布招聘广告、招聘职位刷新，简历筛选及查收，电话面试邀约，发送面试邀请函，参与初试、薪资谈判等，跟进面试者的整个入职流程；',
                        '随时跟踪面试结果，推进公司各部门的招聘工作进展',
                        '员工入职培训,团队文化建设,绩效考核,员工激励,劳动关系处理',
                        '员工生日会等员工活动举办、节假日等员工福利采购；'
                    ]
                },

                // 项目经验
                expProject1: {
                    title: 'Experience',
                    color: '#6666FF',
                    items: [
                        '负责公司招聘工作，拓展招聘渠道，曾经为公司制作求职者人才数据库',
                        '在上一份工作中学到了HR工作的完整流程,提升了自己的领导能力和沟通能力',
                        '锻炼了自己的抗压能力、分析问题能力、洞察力、亲和力、全局掌控力',
                        '在领导的指导下营造互相帮助，创造美好的环境气氛，最终实现个人与集体的双赢。',
                        '学习了对薪资结构的调整和实施。',
                        '对各类工作岗位的性质任务，职业权限，岗位关系，劳动条件和环境，以及员工应具备的资格条件进行系统研究，制定工作说明书'
                    ]
                },


            }
        }
    }
</script>

<style lang="less">
    html, body {
        width: 100%;
        height: 100%;
    }

    #app {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        padding: 20px 5vw;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #2c3e50;

    }

    .layout_row {
        display: flex;
        justify-content: space-between;
    }

    .layout_left, .layout_right {
        flex: 1;
        background-color: #40a9ff;
    }

    .layout_right {
        margin-left: 40px;
        background-color: gold;
    }
</style>

<style lang="less" scoped>

    #app {

        .my_desc {
            margin-bottom: 40px;

            .school_box {
                p {
                    margin-bottom: .3rem;
                }

                .date {
                    color: rgb(178, 178, 178, 1);
                }

                .name {
                    color: rgba(0, 0, 0, .85);
                    font-weight: bold;
                }

                .lesson {
                    color: rgba(0, 0, 0, .85);
                }
            }
        }

    }

</style>
