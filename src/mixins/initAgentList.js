import fData from '@/app.config';
import { getAgeList } from '@/api/account';
export const getAgencyId = {
    data() {
        return {
            agenList: [],
            agenListpro: [],
            token: fData.token(),
        }
    },
    created() {
        if (this.token.isAdmin === 1) {
            this.getAenList();
            
        }
    },
    // watch: {
    //     page: 'loadData'
    // },
    methods: {
        // 查询代理列表
        getAenList() {
            getAgeList().then(res => {
                if (res.success) {
                    this.agenList = res.data;
                    sessionStorage.setItem('agenId', this.agenList[0].account)
                    this.agenListpro.push({ agencyId: '', account: this.$t('common.all') }, ...res.data)
                } else {
                    this.$message.error(res.message);
                }
            });
        },
        // pick agencyId
        checkAgenId(account) {
            if (!account) return ''
            let a;
            this.agenListpro.map(v => {
                if (v.account == account) {
                    a = v.agencyId;
                }
            });
            return a;
        },

    }
}



