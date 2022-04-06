import $api from 'API/api'

export const getMenuService = () => {
  return $api.get('/menu')
}
