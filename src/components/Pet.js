import React from 'react'



class Pet extends React.Component {

  

  

  render() {

    let isAdopted = this.props.pet.isAdopted
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            
            {this.props.pet.name}
            {this.props.pet.gender === 'female' ? ' ♀' : ' ♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {
          isAdopted === true ?  <button 
                                  className='ui disabled button'
                                >Already adopted</button> 
                             : 
                                <button 
                                  className='ui primary button'
                                  onClick={() => this.props.onAdoptPet(this.props.pet.id)}
                                >Adopt pet</button>
        }
        </div>
      </div>
    )
  }
}

export default Pet
