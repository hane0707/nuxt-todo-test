import { vuexfireMutations } from 'vuexfire'

export const mutations = {
    // vuexfireが用意しているmutationが使用できるようになる。
    // これはstore配下のindex.jsにしか記載できない。
    ...vuexfireMutations
}