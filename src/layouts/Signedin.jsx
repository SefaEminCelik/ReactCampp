import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function Signedin({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/tr/2/2a/Sakarya_B%C3%BCy%C3%BCk%C5%9Fehir_Belediyesi_logosu.png" />
                <Dropdown pointing="top left" text="Sefa">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>



        </div>
    )
}
