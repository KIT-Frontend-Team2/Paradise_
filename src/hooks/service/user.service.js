import { useMutation } from 'react-query'

import userApi from '../../apis/service/user.api'
import { ERROR_MESSAGE } from '../../consts/api'
import TokenRepository from '../../repositories/TokenRepository'
import UserRepository from '../../repositories/UserRepository'

const useUserAPi = {
	signup: () => {
		const { mutateAsync } = useMutation(userInfo => userApi.signUp(userInfo), {
			retry: 1,
		})
		return { mutateAsync }
	},

	login: () => {
		const { mutateAsync } = useMutation(
			loginInfo => userApi.login(loginInfo.email, loginInfo.pw),
			{
				retry: 1,
				onError: () => {
					alert(
						'이메일 또는 비밀번호를 잘못 입력했습니다.\n' +
							'입력하신 내용을 다시 확인해주세요.',
					)
				},
				onSuccess: data => {
					UserRepository.setUser(data.data.user)
					TokenRepository.setToken(data.data.tokenForHeader)
				},
			},
		)
		return { mutateAsync }
	},

	logout: () => {
		const { mutate, isSuccess } = useMutation(() => userApi.logOut(), {
			retry: 1,
			onError: () => {
				alert(ERROR_MESSAGE)
			},
			onSuccess: () => {
				UserRepository.removeUser()
				TokenRepository.removeToken()
			},
		})
		return { mutate, isSuccess }
	},

	checkEmail: email => {
		const { mutateAsync } = useMutation(() => userApi.checkEmail(email), {
			onSuccess: () => {
				alert('사용 가능한 이메일입니다.')
			},
		})
		return { mutateAsync }
	},

	checkNickName: nickName => {
		const { mutateAsync } = useMutation(() => userApi.checkNickName(nickName), {
			onSuccess: () => {
				alert('사용 가능한 닉네임입니다.')
			},
		})
		return { mutateAsync }
	},
}

export default useUserAPi
