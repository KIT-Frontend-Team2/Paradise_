import { ImageList, ImageListItem } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import MTooltip from '../../atoms/Tooltip/MTooltip'

// import {useNavigate} from "react-router-dom";

const DeImageList = ({ width, height, cols, rowHeight, itemData }) => {
	// const navigate = useNavigate();

	const onLinkWithId = id => {
		// navigate(`/product/detail` + id)
		console.log(id + ' 번째 게시물로 이동 되었습니다.')
	}

	return (
		<ImageList
			sx={{ width: width, height: height }}
			cols={cols}
			rowHeight={rowHeight}
		>
			{itemData.map((item, i) => (
				<ImageListItem
					key={i}
					sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}
				>
					<S.ImgBox size={rowHeight} onClick={() => onLinkWithId(item.id)}>
						<MTooltip title={`${item.name}` + ' 페이지로 이동'}>
							<img src={item.img} alt={item.title} loading={'lazy'} />
						</MTooltip>
					</S.ImgBox>
				</ImageListItem>
			))}
		</ImageList>
	)
}

export default DeImageList

const S = {}

S.ImgBox = styled.div`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	overflow: hidden;
	margin: 0 auto;
	border-radius: 8px;
	cursor: pointer;
	border: 1px solid #dddddd;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

DeImageList.propTypes = {
	/**
	 * 해당 섹션의 가로 길이(px)를 입력해주세요.
	 */
	width: PropTypes.number,
	/**
	 * 해당 섹션의 세로 길이(px)를 입력해주세요.
	 */
	height: PropTypes.number,
	/**
	 * 해당 아이템은 몇개씩 정렬할까요
	 */
	cols: PropTypes.number,
	/**
	 * 아이템의 세로 길이(px)를 입력해주세요
	 */
	rowHeight: PropTypes.number,
	/**
	 * 아이템을 넣어주세요
	 */
	itemData: PropTypes.array.isRequired,
}
