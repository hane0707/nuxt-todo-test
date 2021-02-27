import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
import { _ } from 'core-js'

// DB設定
const db = firebase.firestore()
const todosRef = db.collection('todos')

export const state = () => ({
    todos:[]
})

export const actions = {
    // それぞれのアクションはfirebaseのmutationを呼んでいる
    init: firestoreAction(({ bindFirestoreRef }) => {
        // todos配列にfirestoreから読み込んだ値がバインドされる
        bindFirestoreRef('todos', todosRef)
    }),
    add: firestoreAction((context, name) => {
        if(name.trim()){
            todosRef.add({
                name: name,
                done: false,
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }),
    remove: firestoreAction((context, id) =>{
        todosRef.doc(id).delete()
    }),
    toggle: firestoreAction((context, todo) => {
        todosRef.doc(todo.id).update({
            done: !todo.done
        })
    })
}