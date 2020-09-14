import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">対象従業員の登録情報</h3>
                    <div className="card-body">
                        <div className="row">
                            <table className="table table-striped table-bordered">
                                <tr>
                                    <th>姓</th>
                                    <td>{this.state.employee.firstName}</td>
                                </tr>
                                <tr>
                                    <th>名</th>
                                    <td>{this.state.employee.lastName}</td>
                                </tr>
                                <tr>
                                    <th>メールアドレス</th>
                                    <td>{this.state.employee.email}</td>
                                </tr>
                            </table>
                        </div>
                        <br />
                        <div className="row">
                            <button className="btn btn-primary" onClick={() => this.props.history.goBack()}>戻る</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
