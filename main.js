//https://jsfiddle.net/big_boom/39rk8h0y/7/
//https://jsfiddle.net/gongzza/wk3emoL0/
//https://jsfiddle.net/big_boom/39rk8h0y/22/

var mockAxios = new AxiosMockAdapter(axios);

const presentList = [
    {
        "historyNumber": 230,
        "firstName": "jtrescgb",
        "lastName": "mgvnyjve",
        "patrName": "jfzirkwh",
        "birthDate": "1952-02-11",
        "diagnosis": "rpzcolmd",
        "bedNumber": 119
    },
    {
        "historyNumber": 168,
        "firstName": "oiwkilgw",
        "lastName": "pmpmqtuv",
        "patrName": "uksilguj",
        "birthDate": "1960-04-02",
        "diagnosis": "mfpkfuii",
        "bedNumber": 219
    },
    {
        "historyNumber": 110,
        "firstName": "jqdtmzot",
        "lastName": "gxwofiyw",
        "patrName": "pfizabcl",
        "birthDate": "1957-03-16",
        "diagnosis": "uupnukqy",
        "bedNumber": 289
    },
    {
        "historyNumber": 436,
        "firstName": "jgcskson",
        "lastName": "wyevtgyd",
        "patrName": "qudgteoi",
        "birthDate": "1957-01-11",
        "diagnosis": "ytynsaxp",
        "bedNumber": 125
    },
    {
        "historyNumber": 461,
        "firstName": "dwcuumcy",
        "lastName": "ntfteoiw",
        "patrName": "lqubuxhm",
        "birthDate": "1961-05-21",
        "diagnosis": "sbcijvei",
        "bedNumber": 104
    },
    {
        "historyNumber": 176,
        "firstName": "wvoivjes",
        "lastName": "chfcuvul",
        "patrName": "wcurzxpg",
        "birthDate": "1985-01-22",
        "diagnosis": "molmejin",
        "bedNumber": 224
    },
    {
        "historyNumber": 321,
        "firstName": "wvmwxbkx",
        "lastName": "ljlceogp",
        "patrName": "fgpivhty",
        "birthDate": "1969-01-10",
        "diagnosis": "ovoivjfy",
        "bedNumber": 126
    },
    {
        "historyNumber": 427,
        "firstName": "rayrqfzk",
        "lastName": "avgpisqz",
        "patrName": "dppfgpgm",
        "birthDate": "1953-09-25",
        "diagnosis": "rwlmbwhu",
        "bedNumber": 128
    },
    {
        "historyNumber": 213,
        "firstName": "zdqvfmvt",
        "lastName": "jldgvnam",
        "patrName": "mxecxhrn",
        "birthDate": "1966-12-05",
        "diagnosis": "ndarjsor",
        "bedNumber": 234
    },
    {
        "historyNumber": 234,
        "firstName": "riovnehu",
        "lastName": "gtbxmrxo",
        "patrName": "bmgvknlq",
        "birthDate": "1938-07-24",
        "diagnosis": "xocuryue",
        "bedNumber": 163
    },
    {
        "historyNumber": 161,
        "firstName": "uolmarjs",
        "lastName": "opjcfwru",
        "patrName": "aqfzkbxo",
        "birthDate": "1952-03-23",
        "diagnosis": "akxlmddf",
        "bedNumber": 236
    },
    {
        "historyNumber": 423,
        "firstName": "zmmbqbkw",
        "lastName": "goalcdjn",
        "patrName": "lqywlnkk",
        "birthDate": "1973-12-04",
        "diagnosis": "skxjbdmy",
        "bedNumber": 196
    },
    {
        "historyNumber": 298,
        "firstName": "bqcnhxtb",
        "lastName": "xnvpnuls",
        "patrName": "kskvcwef",
        "birthDate": "1971-07-29",
        "diagnosis": "mshfflom",
        "bedNumber": 231
    },
    {
        "historyNumber": 458,
        "firstName": "mungrovm",
        "lastName": "xdxgkjpu",
        "patrName": "igdxhqjw",
        "birthDate": "1970-11-08",
        "diagnosis": "jfwtfqoy",
        "bedNumber": 133
    },
    {
        "historyNumber": 468,
        "firstName": "csgeylfs",
        "lastName": "ysqcngsw",
        "patrName": "hsskxkhf",
        "birthDate": "1960-10-27",
        "diagnosis": "cvanogoz",
        "bedNumber": 166
    },
    {
        "historyNumber": 369,
        "firstName": "jvapbinq",
        "lastName": "pbkzsorr",
        "patrName": "mgvlradl",
        "birthDate": "1974-07-22",
        "diagnosis": "yjzviyvh",
        "bedNumber": 294
    },
    {
        "historyNumber": 500,
        "firstName": "cjqdpqml",
        "lastName": "shhnujkx",
        "patrName": "izxqkdlv",
        "birthDate": "1978-02-01",
        "diagnosis": "xcopiude",
        "bedNumber": 171
    },
    {
        "historyNumber": 242,
        "firstName": "sldifcvv",
        "lastName": "tifctnje",
        "patrName": "vqrkcgwr",
        "birthDate": "1967-06-27",
        "diagnosis": "tsjqdqxr",
        "bedNumber": 218
    },
    {
        "historyNumber": 475,
        "firstName": "xsyntfrw",
        "lastName": "khhowruy",
        "patrName": "lijrkbwg",
        "birthDate": "1967-04-04",
        "diagnosis": "qnsyqjvf",
        "bedNumber": 199
    },
    {
        "historyNumber": 439,
        "firstName": "sembuvse",
        "lastName": "nhtwhphn",
        "patrName": "sdjoplii",
        "birthDate": "1955-06-16",
        "diagnosis": "paghobno",
        "bedNumber": 119
    },
    {
        "historyNumber": 441,
        "firstName": "yhoxxugt",
        "lastName": "frvflptw",
        "patrName": "glonwxwo",
        "birthDate": "1950-02-07",
        "diagnosis": "hqkcgwqr",
        "bedNumber": 176
    },
    {
        "historyNumber": 464,
        "firstName": "kgcopiwj",
        "lastName": "fvsyqjvf",
        "patrName": "mvtfrubu",
        "birthDate": "1965-08-30",
        "diagnosis": "uonydurx",
        "bedNumber": 210
    },
    {
        "historyNumber": 105,
        "firstName": "lccdjmie",
        "lastName": "uppgkhgh",
        "patrName": "sushgiwj",
        "birthDate": "1974-09-06",
        "diagnosis": "hgkhdusf",
        "bedNumber": 269
    },
    {
        "historyNumber": 346,
        "firstName": "nuiipblc",
        "lastName": "dhzfzirj",
        "patrName": "uzmltmcy",
        "birthDate": "1986-01-24",
        "diagnosis": "nvnehuhy",
        "bedNumber": 274
    },
    {
        "historyNumber": 320,
        "firstName": "dznsyqjv",
        "lastName": "ddguidry",
        "patrName": "wnwvqpbn",
        "birthDate": "1969-03-31",
        "diagnosis": "knlolnjg",
        "bedNumber": 111
    },
    {
        "historyNumber": 335,
        "firstName": "tceoiuej",
        "lastName": "ioscdmxf",
        "patrName": "hvkkwdyn",
        "birthDate": "1976-10-09",
        "diagnosis": "rvgpfizz",
        "bedNumber": 288
    },
    {
        "historyNumber": 407,
        "firstName": "zrmjiotd",
        "lastName": "hexfdarl",
        "patrName": "fpkgaiqf",
        "birthDate": "1988-05-24",
        "diagnosis": "cskvyiux",
        "bedNumber": 148
    }
]

const quittingList = [
    {
        "historyNumber": 278,
        "firstName": "nejhispw",
        "lastName": "odxgnvqs",
        "patrName": "qckvzlfq",
        "birthDate": "1952-02-11",
        "diagnosis": "oxvpjyvh",
        "cause": "ufqp"
    },
    {
        "historyNumber": 151,
        "firstName": "uprmkona",
        "lastName": "lgvlqwof",
        "patrName": "htxivgrq",
        "birthDate": "1960-04-02",
        "diagnosis": "dreqstqv",
        "cause": "gtdi"
    },
    {
        "historyNumber": 156,
        "firstName": "uokjqdqx",
        "lastName": "qkcepoyf",
        "patrName": "dweeidpr",
        "birthDate": "1957-03-16",
        "diagnosis": "nohqlfsa",
        "cause": "wizz"
    },
    {
        "historyNumber": 500,
        "firstName": "acikyqjv",
        "lastName": "datvwwtf",
        "patrName": "tcepmpnt",
        "birthDate": "1957-01-11",
        "diagnosis": "iipaggnv",
        "cause": "okfw"
    },
    {
        "historyNumber": 404,
        "firstName": "eojchhkh",
        "lastName": "fefmupob",
        "patrName": "orttonww",
        "birthDate": "1961-05-21",
        "diagnosis": "rtuqwlok",
        "cause": "lxgm"
    },
    {
        "historyNumber": 348,
        "firstName": "rqcomvqs",
        "lastName": "qbimjmfr",
        "patrName": "uwbpufrv",
        "birthDate": "1985-01-22",
        "diagnosis": "brjtrcjo",
        "cause": "telu"
    },
    {
        "historyNumber": 344,
        "firstName": "rnpllvup",
        "lastName": "qhpcqzad",
        "patrName": "mddgtfqo",
        "birthDate": "1969-01-10",
        "diagnosis": "zfboqoxu",
        "cause": "kmic"
    },
    {
        "historyNumber": 262,
        "firstName": "vxboqowt",
        "lastName": "djkweflr",
        "patrName": "besbdlvy",
        "birthDate": "1953-09-25",
        "diagnosis": "hlikzsqc",
        "cause": "kuup"
    },
    {
        "historyNumber": 316,
        "firstName": "xcophrot",
        "lastName": "eofibgct",
        "patrName": "lynqqjwj",
        "birthDate": "1966-12-05",
        "diagnosis": "eryrpxvj",
        "cause": "ilig"
    },
    {
        "historyNumber": 206,
        "firstName": "pffkktrb",
        "lastName": "gcretjkc",
        "patrName": "bchfdzqd",
        "birthDate": "1938-07-24",
        "diagnosis": "sfundccd",
        "cause": "jkwg"
    },
    {
        "historyNumber": 329,
        "firstName": "dyivdfnc",
        "lastName": "xfibfwvm",
        "patrName": "vwxvkood",
        "birthDate": "1952-03-23",
        "diagnosis": "xffmsdne",
        "cause": "idol"
    },
    {
        "historyNumber": 293,
        "firstName": "egwofgsw",
        "lastName": "fkinnefo",
        "patrName": "fhuccdkq",
        "birthDate": "1973-12-04",
        "diagnosis": "bfyfctps",
        "cause": "vzmk"
    },
    {
        "historyNumber": 341,
        "firstName": "ucelrdpo",
        "lastName": "cskvxcqz",
        "patrName": "bhfgpiss",
        "birthDate": "1971-07-29",
        "diagnosis": "kuuryude",
        "cause": "lrbh"
    },
    {
        "historyNumber": 172,
        "firstName": "dympowui",
        "lastName": "evukopit",
        "patrName": "wdbsnlps",
        "birthDate": "1970-11-08",
        "diagnosis": "snjgdyke",
        "cause": "pnuj"
    },
    {
        "historyNumber": 255,
        "firstName": "wixrpage",
        "lastName": "cxhtymne",
        "patrName": "huhzdpst",
        "birthDate": "1960-10-27",
        "diagnosis": "rdmcxlma",
        "cause": "qewy"
    },
    {
        "historyNumber": 158,
        "firstName": "vujnlsga",
        "lastName": "kwiwjhjv",
        "patrName": "dbwixqjy",
        "birthDate": "1974-07-22",
        "diagnosis": "rpvmuppf",
        "cause": "gphn"
    },
    {
        "historyNumber": 453,
        "firstName": "ujjuxfgn",
        "lastName": "wwtdlsks",
        "patrName": "nidprqeu",
        "birthDate": "1978-02-01",
        "diagnosis": "pobmhxvk",
        "cause": "mgtd"
    },
    {
        "historyNumber": 236,
        "firstName": "hlkrfvsc",
        "lastName": "epnwuhbk",
        "patrName": "uwxzewyd",
        "birthDate": "1967-06-27",
        "diagnosis": "tikcdjnl",
        "cause": "tjno"
    },
    {
        "historyNumber": 201,
        "firstName": "ocsjouji",
        "lastName": "pafcrese",
        "patrName": "rwjgboqo",
        "birthDate": "1967-04-04",
        "diagnosis": "xvjlbxje",
        "cause": "thex"
    }
]

// fake request
mockAxios.onGet('/api/quittingList').reply(200, quittingList)
mockAxios.onGet('/api/presentList').reply(200, presentList)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      patient: {}
    }
    this.viewPatient = this.viewPatient.bind(this);
  }

  viewPatient(patient) {
    this.setState({
      patient : patient
    });
  }

  render() {
    return (
      <div className="row">
        <InfoPatient patient={this.state.patient} />
        <AllPatients viewPatient={this.viewPatient} />
      </div>
    )
  }
}

class InfoPatient extends React.Component {
  constructor(props) {
    super(props)
    this.getPatientOld = this.getPatientOld.bind(this);
  }

  getPatientOld(PatDate){
    let actulDate = PatDate.split('-')
    let now = new Date(); //Текущя дата
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    let dob = new Date(actulDate[0], actulDate[1], actulDate[2]); //Дата рождения
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст

    //Возраст = текущий год - год рождения
    age = today.getFullYear() - dob.getFullYear();
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today < dobnow) {
      age = age-1;
    }
    return  (age)
  }

  render() {
  	let patientOld = "";
		let actual_date = this.props.patient.birthDate;
    if (actual_date) {
      patientOld = this.getPatientOld(actual_date);
    }
    console.log(actual_date);
    return (
        <div className="col">
        <ul className="bg-primary nav justify-content-center">
            <li className="nav-item">
              <a className="text-white nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Информация о пациентах</a>
            </li>
        </ul>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">ФИО</th>
              <td>{this.props.patient.firstName} {this.props.patient.lastName} {this.props.patient.patrName}</td>
            </tr>
            <tr>
              <th scope="row">Возраст</th>
              <td>{patientOld}</td>
            </tr>
            <tr>
              <th scope="row">Диагноз</th>
              <td>{this.props.patient.diagnosis}</td>
            </tr>
          </tbody>
        </table>
        </div>
    )
  }
}


class AllPatients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quittingList: [],
      presentList: [],
      quitting_active: true,
      quittingListLen: '',
      presentListLen: ''
    };
    this.handleQuittingClick = this.handleQuittingClick.bind(this);
    this.handlePresentClick = this.handlePresentClick.bind(this);
    this.getPatient = this.getPatient.bind(this);
  }
  handleQuittingClick() {
      this.setState({ quitting_active: true });
  }

  handlePresentClick() {
      this.setState({ quitting_active: false });
  }

  getPatient(patient, e) {
    this.props.viewPatient(patient);
  }

  componentDidMount() {
    axios.get('/api/quittingList').then((data) => {
      this.setState({
        quittingList: data.data,
        quittingListLen: data.data.length
      });
    })
    axios.get('/api/presentList').then((data) => {
      this.setState({
        presentList: data.data,
        presentListLen: data.data.length
      });
    })
  }

  render() {
    const endQuittingList = this.state.quittingList.map(patient => (
              <tr onClick={(e) => this.getPatient(patient, e)} key = {patient.historyNumber}>
                <th scope="row">{patient.historyNumber}</th>
                <td>{patient.firstName} {patient.lastName} {patient.patrName}</td>
                <td>{patient.cause}</td>
              </tr>
            ));
    const endPresentList = this.state.presentList.map(patient => (
              <tr onClick={(e) => this.getPatient(patient, e)} key = {patient.historyNumber}>
                <th scope="row">{patient.historyNumber}</th>
                <td>{patient.firstName} {patient.lastName} {patient.patrName}</td>
                <td>{patient.bedNumber}</td>
              </tr>
            ));

    return (
      <div className="bg-light col">
      <ul className="nav justify-content-center">
        <li onClick={this.handlePresentClick} className="nav-item">
          <a className={this.state.quitting_active ? "active nav-link text-muted" : "active nav-link"}  href="#">Присутствуют ({ this.state.presentListLen })</a>
        </li>
        <li onClick={this.handleQuittingClick} className="nav-item">
          <a className={this.state.quitting_active ? "active nav-link" : "text-muted active nav-link"} href="#" tabindex="-1" aria-disabled="true">Выбывшие ({ this.state.quittingListLen })</a>
        </li>
      </ul>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">№ ИБ</th>
      <th scope="col">ФИО</th>
      <th scope="col">{this.state.quitting_active ? "Причина выбытия" : "Палата"}</th>
    </tr>
  </thead>
  <tbody>
    {this.state.quitting_active ? endQuittingList : endPresentList}
  </tbody>
</table>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))



// <script src="https://unpkg.com/axios@0.15.3/dist/axios.js"></script>
// <script src="https://unpkg.com/axios-mock-adapter@1.7.1/dist/axios-mock-adapter.js"></script>
