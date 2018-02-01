import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      per_page: 15,
    }
  }

  onPaginationClick = (number) => {
    this.props.selectPage(number.selected);
  }

  render() {
    const { per_page, } = this.state;
    const { settings } = this.props;

    if (!settings) {
      return (<div></div>);
    }

    return (
      <div className="wrapper">
        <div className="wrapper__inner">
          {
            settings.total === 0 ? '' : <ReactPaginate
              previousLabel={<svg className="icon-caret-thick icon--xs"><use xlinkHref="#icon-caret-thick"></use></svg>}
              nextLabel={<svg className="icon-caret-thick icon--xs"><use xlinkHref="#icon-caret-thick"></use></svg>}
              breakLabel={<li className="page dropdown dropdown--down dropdown--no-caret" data-position="center">...</li>}
              containerClassName="pagination"
              pageClassName="page"
              previousClassName="page page--nav page--prev"
              nextClassName="page page--nav page--next"
              activeClassName="is--active"
              pageCount={settings.total}
              onPageChange={this.onPaginationClick}
            />
          }

        </div>
        {
          settings.total === 0 ? '' : <div className="wrapper__inner -align-right">
            <ul className="list list--inline">
              <li className="item">
                Showing
              </li>
              <li className="item">
                <select onChange={(e) => this.props.onAmountChange(e.target.value)} className="link link--dropdown dropdown dropdown--up">
                  <option value={15}>15</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </li>
              <li className="item">
                of 67
              </li>
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default Pagination;
