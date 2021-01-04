import api from "../services/api"

export const getCompanies = companies => {return {type:"GET_COMPANIES",payload:companies}}
export const addCompany = company => {return {
  type:"ADD_COMPANY",
  payload:company,
  meta: {
    offline: {

      effect: { url: 'http://192.168.93.11:3333/company', method: 'POST', data:company , headers: {Authorization:api.defaults.headers['Authorization']} },

      commit: { type: 'ADD_COMPANY_COMMIT', meta: { company } },

      rollback: { type: 'ADD_COMPANY_ROLLBACK', meta: { company } }
    }
  }}}

// export const fetchCompanies = (dispatch, getState) => {
//     api.get('/').then(res => {
//       dispatch(getCompanies(res.data))
//     }).catch(() => {
//         dispatch({type:"LOGOUT"})
//     })
//   } 
export function fetchCompanies(){
    return function fetchCompaniesThunk(dispatch){
  api.get('/').then(res => {
    dispatch(getCompanies(res.data))
  })
}
} 
// export function saveNewCompany(company){
//   return function saveNewCompanyThunk(dispatch){
//     api.post('/company',{
//       company
//     }).then(({data})=>{
//       dispatch(addCompApiany(data.company))
//     }).catch(err=>{
//       alert('Erro')
//   })
// }
// } 