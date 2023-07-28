const chatListMock = {
	status: 200,
	message: 'success',
	data: {
		chatingList: [
			{
				user_status: 'buyer',
				user_id: 1,
				product_id: '12',
				product_name: 'Sample Product',
				product_price: 15000,
				product_status: '판매 중',
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: true,
				last_chat: '안녕하세요, 구매하고 싶습니다!',
				last_chat_time: '2023-01-01T12:45:35Z',
				last_chat_ago: '방금 전',
			},
			{
				user_status: 'buyer',
				user_id: 2,
				product_id: '123',
				product_name: 'Sample Product',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: true,
				last_chat: '안녕하세요, 구매하고 싶습니다!',
				product_status: '판매 중',
				last_chat_time: '2023-01-01T12:45:35Z',
				last_chat_ago: '방금 전',
			},
			{
				user_status: 'buyer',
				user_id: 3,
				product_id: '1333',
				product_name: 'Sample Product',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: true,
				last_chat: '안녕하세요, 구매하고 싶습니다!',
				product_status: '판매 중',
				last_chat_time: '2023-01-01T12:45:35Z',
				last_chat_ago: '방금 전',
			},
			{
				user_status: 'buyer',
				user_id: 4,
				product_id: '1234',
				product_name: 'Sample Product',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: true,
				last_chat: '안녕하세요, 구매하고 싶습니다!',
				product_status: '판매 중',
				last_chat_time: '2023-01-01T12:45:35Z',
				last_chat_ago: '방금 전',
			},
			{
				user_status: 'seller',
				user_id: 5,
				product_id: '12351',
				product_name: 'Another Product',
				product_price: 21000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: true,
				last_chat: '네 가능합니다.',
				product_status: '판매 완료',
				last_chat_time: '2023-01-01T12:45:02Z',
				last_chat_ago: '5분 전',
			},
			{
				user_status: 'seller',
				user_id: 6,
				product_id: '1236',
				product_name: 'Another Product',
				product_price: 21000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: true,
				last_chat: '네 가능합니다.',
				product_status: '판매 중',
				last_chat_time: '2023-01-01T12:45:02Z',
				last_chat_ago: '5분 전',
			},
			{
				user_status: 'seller',
				user_id: 7,
				product_id: '1237',
				product_name: 'Another Product',
				product_price: 21000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: false,
				last_chat: '네 가능합니다.',
				product_status: '예약 중',
				last_chat_time: '2023-01-01T12:45:02Z',
				last_chat_ago: '5분 전',
			},
			{
				user_status: 'seller',
				user_id: 8,
				product_id: '1238',
				product_name: 'Another Product',
				product_price: 21000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: false,
				last_chat: '네 가능합니다.',
				product_status: '나눔 완료',
				last_chat_time: '2023-01-01T12:45:02Z',
				last_chat_ago: '5분 전',
			},
			{
				user_status: 'seller',
				user_id: 9,
				product_id: '1212',
				product_name: 'Another Product',
				product_price: 21000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: false,
				last_chat: '네 가능합니다.',
				product_status: '나눔 완료',
				last_chat_time: '2023-01-01T12:45:02Z',
				last_chat_ago: '5분 전',
			},
			{
				user_status: 'seller',
				user_id: 10,
				product_id: '12121',
				product_name: 'Another Product',
				product_price: 21000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: false,
				last_chat: '네 가능합니다.',
				product_status: '나눔 중',
				last_chat_time: '2023-01-01T12:45:02Z',
				last_chat_ago: '5분 전',
			},
			{
				user_status: 'seller',
				user_id: 11,
				product_id: '12311',
				product_name: 'Another Product',
				product_price: 21000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				is_new_chat: false,
				last_chat: '네 가능합니다.',
				product_status: '예약 중',
				last_chat_time: '2023-01-01T12:45:02Z',
				last_chat_ago: '5분 전',
			},
		],
		channel_product_id: 12,
		channel_product_price: 22000,
		channel_product_main_img_url:
			'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
		product_name: 'Sample Product',
		product_price: 15000,
		product_status: '판매 중',
		channel_create_user_id: 33,
		select_chat_list: [
			{
				msg_id: 'e6d',
				msg_text: '안녕하세요?',
				msg_upload_at: '2023-03-01T14:01:00',
				msg_user_id: '392',
				msg_user_nick_name: '김철수',
				msg_user_profile_url:
					'https://flexible.img.hani.co.kr/flexible/normal/400/500/imgdb/original/2023/0503/20230503501277.jpg',
				count: 5,
			},
			{
				msg_id: 'e6d12',
				msg_text: '안녕하세요?',
				msg_upload_at: '2023-03-01T14:01:00',
				msg_user_id: '392312',
				msg_user_nick_name: '김유리',
				msg_user_profile_url:
					'https://flexible.img.hani.co.kr/flexible/normal/400/500/imgdb/original/2023/0503/20230503501277.jpg',
				count: 5,
			},
		],
		chatting_list: [
			// 판매자의 경우 현재 활성화 되어있는 사람말고도 다른 사람의 채팅방 정보가 보여야함
			{
				chat_id: '32d4da33',
				chat_user_id: '8cc7420f',
				chat_user_nick_name: '박이이',
				chat_user_profile_url:
					'https://flexible.img.hani.co.kr/flexible/normal/400/500/imgdb/original/2023/0503/20230503501277.jpg',
				last_chat_time: '2023-03-01T13:45:00',
				is_new_chat: false,
			},
			{
				chat_id: '32da33',
				chat_user_id: '8cc74f',
				chat_user_nick_name: '박이이오아마',
				chat_user_profile_url:
					'https://flexible.img.hani.co.kr/flexible/normal/400/500/imgdb/original/2023/0503/20230503501277.jpg',
				last_chat_time: '2023-03-01T13:45:00',
				is_new_chat: true,
			},
		],
		users: [
			{
				id: 'user1',
				name: '김철수',
				hashedPassword: 'hashed_password_1',
				email: 'chulsu@example.com',
				image:
					'https://flexible.img.hani.co.kr/flexible/normal/400/500/imgdb/original/2023/0503/20230503501277.jpg',
				userType: 'User',
				favoriteIds: [],
				user_status: 'seller',
			},
			{
				id: 'admin1',
				name: '박지훈',
				hashedPassword: 'hashed_password_2',
				email: 'jihun@example.com',
				image:
					'https://flexible.img.hani.co.kr/flexible/normal/400/500/imgdb/original/2023/0503/20230503501277.jpg',
				userType: 'Admin',
				favoriteIds: [],
				user_status: 'seller',
			},
		],
		products: [
			{
				id: 'product1',
				title: '제품 1',
				description: '제품 1의 설명',
				imageSrc:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				category: '가전제품',
				userId: 'user1',
				price: 150000,
				product_status: '판매 중',
			},
			{
				id: 'product2',
				title: '제품 2',
				description: '제품 2의 설명',
				imageSrc:
					'https://flexible.img.hani.co.kr/flexible/normal/400/500/imgdb/original/2023/0503/20230503501277.jpg',
				category: '가전제품',
				userId: 'user1',
				price: 100000,
				product_status: '판매 중',
			},
		],
		conversations: [
			{
				id: 'conv1',
				senderId: 'user1',
				receiverId: 'admin1',
			},
		],
		messages: [
			{
				id: 'msg1',
				text: '안녕하세요? 질문이 있습니다.',
				senderId: 'user1',
				receiverId: 'admin1',
				conversationId: 'conv1',
				is_new_chat: true,
				image: '',
				createdAt: '2023-01-01T12:45:35Z',
				productId: 'product1',
			},
			{
				id: 'msg2',
				text: '네, 어떤 질문이신가요?',
				senderId: 'admin1',
				receiverId: 'user1',
				conversationId: 'conv1',
				is_new_chat: false,
				image: '',
				createdAt: '2023-01-01T12:45:35Z',
				productId: 'product1',
			},
		],
	},
}

export default chatListMock
