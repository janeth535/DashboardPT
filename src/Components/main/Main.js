import admin from "../../assets/admin.jpg";
import { FaUsers, FaRegCreditCard, FaChartBar, FaEye } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { AiOutlineFundView } from "react-icons/ai";

import Chart from "../chart/Chart";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <div className="main-title">
          <img src={admin} alt="admin" />
          <div className="main-greeting">
            <h1>Olá Mariana</h1>
            <p>Bem vindo ao Dashboard</p>
          </div>
        </div>

        <div className="main-cards">
          <div className="card">
            <i className="text-lightblue">
              <FaUsers />
            </i>
            <div className="card-inner">
              <p className="text-primary-p">Número de Usuários</p>
              <span className="font-bold text-title">634</span>
            </div>
          </div>

          <div className="card">
            <i className="text-lightblue">
              <AiOutlineFundView />
            </i>
            <div className="card-inner">
              <p className="text-primary-p">Visualizações</p>
              <span className="font-bold text-title">1250 Views</span>
            </div>
          </div>

          <div className="card">
            <i className="text-lightblue">
              <FaRegCreditCard />
            </i>
            <div className="card-inner">
              <p className="text-primary-p">Pedidos</p>
              <span className="font-bold text-title">34</span>
            </div>
          </div>

          <div className="card">
            <i className="text-lightblue">
              <GiMusicalNotes />
            </i>
            <div className="card-inner">
              <p className="text-primary-p">Estilos mais escolhidos</p>
              <span className="font-bold text-title">2</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts-left">
            <div className="charts-left-title">
              <div>
                <h1>Grafic reports</h1>
                <p>Angola, Luanda, LD</p>
              </div>
              <i>
                <FaChartBar />
              </i>
            </div>
            <Chart />
          </div>

          <div className="charts-right">
            <div className="charts-right-title">
              <div>
                <h1>Daily reports</h1>
                <p>Angola, Luanda, LD</p>
              </div>
              <i>
                <FaEye />
              </i>
            </div>
            <div className="charts-right-cards">
              <div className="card1">
                <h1>Novos usuários</h1>
                <p>50</p>
              </div>

              <div className="card2">
                <h1>Download</h1>
                <p>35</p>
              </div>

              <div className="card3">
                <h1>Videos novos</h1>
                <p>65</p>
              </div>

              <div className="card4">
                <h1>Pedidos</h1>
                <p>74</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
