import * as React from 'react';
import { Button  } from 'antd'
import axios from 'axios' 
import Qs from 'qs'

interface MyProps {
    location: any
}

interface MyState {
    step: number
}

class StockAdjust extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            step: this.props.location.pathname.slice(-1)
        })
    }
    
    componentDidMount() {
        this.loadData()
    }

    loadData() {
        const data =  Qs.stringify({
            pageNum:1,pageSize:10,type:4
        });

        axios({
            method: 'post',
            url: 'http://120.79.190.249:8010/inventoryManagerIndex/getInventoryManagerIndexListPage',
            headers : {
                "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data
        }).then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <div style={{ float: 'left' }}><Button type="primary">Add</Button></div>
                <div style={{ float: 'right' }}>
                    <Button type="primary" icon="search">Search</Button>
                </div>
            </div>
        )
    }
}

export default StockAdjust;