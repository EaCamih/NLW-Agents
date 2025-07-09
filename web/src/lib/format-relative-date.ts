import lib from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayJs/locale/pt-br'

lib.locale('pt-br')
lib.extend(relativeTime)

export const dayJs = lib
