import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import UMNA from '../components/umna'

import * as UmnaActions from '../actions/umna'

function mapStateToProps(state) {
	return {
		umna: state.umna
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, UmnaActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UMNA)
