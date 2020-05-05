import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList.jsx";

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits } = this.props
        return(
            <form role='form' onSubmit={ handleSubmit }>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label="Nome" placeholder="Informe o nome" cols="12 4" />
                    <Field name='month' component={labelAndInput} type="number"  readOnly={readOnly}
                        label="Mês" cols="12 4" placeholder="Informe o mês" />
                    <Field name='year' component={labelAndInput} type="number"  readOnly={readOnly}
                           label="Ano" cols="12 4" placeholder="Informe o ano" />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field="credits" legend="Créditos" />
                </div>
                <div className='box-footer'>
                    <div className='btn-group'>
                        <button type='submit' className={ `btn btn-${this.props.submitClass}` }>{this.props.submitLabel}</button>
                        <button type='button' className='btn btn-default'
                                onClick={this.props.init}>Cancelar</button>
                    </div>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)