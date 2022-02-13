import React from "react";
import styled from "styled-components";
import stockup from "../assets/Vector.svg";

const ContentArea = () => {
  return (
    <div class="grow flex-1 " style={{ backgroundColor: "#F3F3F3" }}>
      <ContentWrapper>
        <div class="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="flex">
              <div
                class="flex-auto w-64 mr-4 stock-value "
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderBottom: "2px solid linear-gradient(#00A89A, #08D5E2)",
                }}
              >
                <div className="flex">
                  <div
                    style={{
                      backgroundColor: "#79FDDD4D",
                      width: "90px",
                      height: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: "100%",
                    }}
                  >
                    <img
                      src={stockup}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="flex-auto ml-4">
                    <small>Total Stock value</small>
                    <h1>Ghs150,500</h1>
                    <small>Available Stock value</small>
                    <h1>Ghs127,925</h1>
                  </div>
                </div>
              </div>
              <div
                class="flex-auto w-64 mr-4 stock-value "
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderBottom: "2px solid linear-gradient(#00A89A, #08D5E2)",
                }}
              >
                <div className="flex">
                  <div
                    style={{
                      backgroundColor: "#79FDDD4D",
                      width: "90px",
                      height: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: "100%",
                    }}
                  >
                    <img
                      src={stockup}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="flex-auto ml-4">
                    <small>Total Stock value</small>
                    <h1>Ghs150,500</h1>
                    <small>Available Stock value</small>
                    <h1>Ghs127,925</h1>
                  </div>
                </div>
              </div>
              <div
                class="flex-auto w-64 mr-4 stock-value "
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderBottom: "2px solid linear-gradient(#00A89A, #08D5E2)",
                }}
              >
                <div className="flex">
                  <div
                    style={{
                      backgroundColor: "#79FDDD4D",
                      width: "90px",
                      height: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: "100%",
                    }}
                  >
                    <img
                      src={stockup}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="flex-auto ml-4">
                    <small>Total Stock value</small>
                    <h1>Ghs150,500</h1>
                    <small>Available Stock value</small>
                    <h1>Ghs127,925</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex my-4">
              <div class="flex-1 w-4/5">
                <TableWrapper class="table-fixed">
                  <caption>Available Suppliers</caption>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={stockup} alt="" style={{ width: "30px" }} />
                      </td>
                      <td>Korean Clothing Ltd.</td>
                      <td>Malcolm Lockyer</td>
                      <td>1961</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={stockup} alt="" style={{ width: "30px" }} />
                      </td>
                      <td>Witchy Woman</td>
                      <td>The Eagles</td>
                      <td>1972</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={stockup} alt="" style={{ width: "30px" }} />
                      </td>
                      <td>Shining Star</td>
                      <td>Earth, Wind, and Fire</td>
                      <td>1975</td>
                    </tr>
                  </tbody>
                </TableWrapper>
              </div>
              <div class="flex-none w-1/3 ml-4 notifications">
                <h1>Notification</h1>
                <div className="content-holder">
                  <p className=" flex">
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of
                    <img src={stockup} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

const ContentWrapper = styled.div`
  height: 100%;
  margin-left: "2rem";
  .stock-value {
    background-color: white;
    /* height: 200px; */
    position: relative;

    small {
      font-size: 0.6rem;
      margin: 0;
      text-align: left;
      display: block;
    }
    h1 {
      font-size: 1.7rem;
      font-weight: 600;
      color: #666666;
      text-align: left;
      margin-top: -9px;
      text-transform: uppercase;
    }
  }

  div.stock-value:before {
    content: "";
    width: 100%;
    height: 5px;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: linear-gradient(to right, #00a89a, #08d5e2);
  }

  div.notifications {
    height: 100px;
    h1 {
      background: linear-gradient(269.25deg, #01d0c2 -13.46%, #157cd1 99.57%);
      text-align: left;
      padding: 1rem 1rem 1rem 2rem;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      color: white;
    }
    .content-holder {
      background-color: white;
      padding: 1rem;
      p {
        font-size: 0.8rem;
        text-align: left;
        padding: 1rem;
        background-color: #fff4fd;
        border-radius: 10px;
        color: #c70077;
      }
      img {
        width: 30px;
      }
    }
  }
`;

const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0;
  caption {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 1rem 1rem 1rem 2.8rem;
    text-align: left;
    background: linear-gradient(to right, #1cbbff, #1282e4);
  }
  thead {
  }
  tbody tr {
    background: white;
    border-bottom: 0.5px solid #00a89a;
    text-align: left;
    padding-left: 0.8rem;
    td {
      padding: 1rem 1rem 1rem 2.4rem;
    }
  }
`;
export default ContentArea;
