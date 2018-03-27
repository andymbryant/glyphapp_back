const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// mongoose.connect('mongodb://localhost:27017/glyphdata');
mongoose.connect('mongodb://glyphapp:glyphapp@ds131826.mlab.com:31826/glyphdata')
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongoose is connected');
});

const {helloSchema} = require('./models/hello');
const {damageSchema} = require('./models/damage');
const {healSchema} = require('./models/heal');
const {modifierAddSchema} = require('./models/modifierAdd');
const {modifierRemoveSchema} = require('./models/modifierRemove');
const {deathSchema} = require('./models/death');
const {abilitySchema} = require('./models/ability');
const {itemSchema} = require('./models/item');
const {goldSchema} = require('./models/gold');
const {xpSchema} = require('./models/xp');
const {purchaseSchema} = require('./models/purchase');
const {updateSchema} = require('./models/update');


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/save', function (req, res) {
    let Hello = mongoose.model('hello', helloSchema, 'trial');
    let Damage = mongoose.model('damage', damageSchema, 'COMBATLOG_DAMAGE');
    let Heal = mongoose.model('heal', healSchema, 'COMBATLOG_HEAL');
    let ModifierAdd = mongoose.model('modifierAdd', modifierAddSchema, 'COMBATLOG_MODIFIER_ADD');
    let ModifierRemove = mongoose.model('modifierRemove', modifierRemoveSchema, 'COMBATLOG_MODIFIER_REMOVE');
    let Death = mongoose.model('death', deathSchema, 'COMBATLOG_DEATH');
    let Ability = mongoose.model('ability', abilitySchema, 'COMBATLOG_ABILITY');
    let Item = mongoose.model('item', itemSchema, 'COMBATLOG_ITEM');
    let Gold = mongoose.model('gold', goldSchema, 'COMBATLOG_GOLD');
    let Xp = mongoose.model('xp', xpSchema, 'COMBATLOG_XP');
    let Purchase = mongoose.model('purchase', purchaseSchema, 'COMBATLOG_PURCHASE');
    let Update = mongoose.model('update', updateSchema, 'STATUS_UPDATE');




    for (let i=0; i<req.body.data.length; i++) {
        if (req.body.data[i][0] === 'DOTA_COMBATLOG_DAMAGE') {
            Damage.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                target_name: req.body.data[i][3],
                inflictor_name: req.body.data[i][4],
                attack_damage: req.body.data[i][5],
                health_remaining: req.body.data[i][6]
            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_HEAL') {
            Heal.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                target_name: req.body.data[i][3],
                inflictor_name: req.body.data[i][4],
                heal_value: req.body.data[i][5],
                health_remaining: req.body.data[i][6]
            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_MODIFIER_ADD') {
            ModifierAdd.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                target_name: req.body.data[i][3],
                inflictor_name: req.body.data[i][4],
            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_MODIFIER_REMOVE') {
            ModifierRemove.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                target_name: req.body.data[i][3],
                inflictor_name: req.body.data[i][4],
            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_DEATH') {
            Death.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                target_name: req.body.data[i][3]
            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_ABILITY') {
            Ability.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                target_name: req.body.data[i][3],
                inflictor_name: req.body.data[i][4],
                ability_level: req.body.data[i][5],
                toggle_value: req.body.data[i][6]

            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_ITEM') {
            Item.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                inflictor_name: req.body.data[i][3]
            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_GOLD') {
            Gold.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                gold_amount: req.body.data[i][3]
            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_XP') {
            Xp.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                xp_value: req.body.data[i][3]
            })
        }

        else if (req.body.data[i][0] === 'DOTA_COMBATLOG_PURCHASE') {
            Purchase.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                purchase: req.body.data[i][3]
            })
        }

        else if (req.body.data[i][0] === 'DOTA_STATUS_UPDATE') {
            Update.create({
                timestamp: req.body.data[i][1],
                source_name: req.body.data[i][2],
                kills: req.body.data[i][3],
                deaths: req.body.data[i][4],
                assists: req.body.data[i][5],
                last_hits: req.body.data[i][6],
                total_gold: req.body.data[i][7],
                total_xp: req.body.data[i][8],
                teamfight_participation: req.body.data[i][9],
                current_item_list: req.body.data[i][10],
                life_state: req.body.data[i][11],
                x: req.body.data[i][12],
                y: req.body.data[i][13],
                team_id: req.body.data[i][14]
            })
        }


    }
})

app.set('port', (process.env.PORT || 3000));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
