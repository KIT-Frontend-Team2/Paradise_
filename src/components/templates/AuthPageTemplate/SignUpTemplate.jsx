import { yupResolver } from '@hookform/resolvers/yup'
import Container from 'components/layout/Container'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

import { Validation } from './validation'

const SignUp = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'onchange',
		resolver: yupResolver(Validation),
	})

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<Container>
			<S.Wrapper>
				<S.Title>회원가입</S.Title>
				<S.Notice>
					<span>
						<span className="secondary">*필수항목</span>은 꼭 입력해주세요
					</span>
				</S.Notice>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.CheckContent>
						<S.FromLabel>
							이메일<span className="secondary">*</span>
						</S.FromLabel>
						<InputGroup>
							<Input
								name="email"
								placeholder={'이메일을 입력해주세요'}
								width={'322'}
								{...register('email')}
								error={errors.email?.message}
							/>
							<Button
								type="button"
								label={'중복확인'}
								variant={'primary-outlined'}
							/>
						</InputGroup>
					</S.CheckContent>
					<S.Content>
						<S.FromLabel>
							비밀번호<span className="secondary"> * </span>
						</S.FromLabel>
						<InputGroup>
							<Input
								name="password"
								placeholder={'비밀번호를 입력해주세요'}
								{...register('password')}
								error={errors.password?.message}
							/>
						</InputGroup>
					</S.Content>
					<S.Content>
						<S.FromLabel>
							비밀번호 확인<span className="secondary">* </span>
						</S.FromLabel>
						<InputGroup>
							<Input
								name="passwordconfirm"
								placeholder={'비밀번호 확인을 입력해주세요'}
								{...register('passwordconfirm')}
								error={errors.passwordconfirm?.message}
							/>
						</InputGroup>
					</S.Content>
					<S.CheckContent>
						<S.FromLabel>
							닉네임<span className="secondary">*</span>
						</S.FromLabel>
						<InputGroup>
							<Input
								name="nickname"
								placeholder={'닉네임을 입력헤주세요'}
								width={'322'}
								{...register('nickname')}
								error={errors.nickname?.message}
							/>
							<Button
								type="button"
								label={'중복확인'}
								variant={'primary-outlined'}
							/>
						</InputGroup>
					</S.CheckContent>
					<S.CheckContent>
						<S.FromLabel>
							휴대폰 번호<span className="secondary">* </span>
						</S.FromLabel>
						<InputGroup>
							<Input
								name="phone"
								placeholder={'휴대폰 번호를 입력해주세요 (ex. 010-0000-0000)'}
								{...register('phone')}
								error={errors.phone?.message}
							/>
						</InputGroup>
					</S.CheckContent>
					<S.CheckContent>
						<S.FromLabel>
							지역선택<span className="secondary">*</span>
						</S.FromLabel>
						<InputGroup>
							<Input
								name="address"
								placeholder={'검색 버튼을 눌러주세요'}
								width={'322'}
								{...register('address')}
								error={errors.address?.message}
							/>
							<Button
								type="button"
								label={'검색'}
								variant={'primary-outlined'}
							/>
						</InputGroup>
					</S.CheckContent>
					<Button type="submit" label={'회원가입'} size={'full'} />
				</S.Form>
			</S.Wrapper>
		</Container>
	)
}

export default SignUp

const S = {}

S.Wrapper = styled.div`
	width: 480px;
	margin: 90px auto 250px;
`
S.Title = styled.h2`
	font-size: 32px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	text-align: center;
	margin-bottom: 48px;
`
S.Notice = styled.div`
	text-align: right;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	margin-bottom: 20px;

	.secondary {
		color: ${({ theme }) => theme.PALETTE.secondary};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`
S.Form = styled.form`
	margin-bottom: 48px;
`

S.CheckContent = styled.div`
	padding: 15px 0;
`
S.Content = styled.div`
	padding: 15px 0;
`

S.FromLabel = styled.div`
	padding-bottom: 10px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

	.secondary {
		color: ${({ theme }) => theme.PALETTE.secondary};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`
