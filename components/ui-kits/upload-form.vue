<template>
  <div>
    <div v-show="showCropZone">
        <transition name="modal">
        <div class="modal-mask">
        <div class="modal-wrapper">
            <div :class="['modal-container','modal-lg']">
            <div class="modal-header">
                Crop hình
            </div>
            <div class="modal-body">
                <vue-croppie
                    ref=croppieRef
                    :enableResize="enableResize"
                    :enableOrientation="enableOrientation"
                    @result="result"
                    @update="update"
                    :viewport="viewPort"
                    :boundary="viewPort"
                    >
                    </vue-croppie>
            </div>

            <div class="modal-footer">
                <button class="btn btn-primary" :disabled="isCroping" @click="crop" type="button"><i :class="{fa: true, 'fa-crop': !isCroping, 'fa-spinner': isCroping, 'fa-spin': isCroping}"></i> {{(isCroping ? 'Đang Crop hình': 'Crop hình')}}</button>
                <button class="btn btn-default" type="button"  @click.prevent="closeCropZone">
                    Đóng
                </button>
            </div>
            </div>
        </div>
        </div>
        </transition>
    </div>

    <div class="uploadzone" v-show="showUploadZone">
        <div :class="['form-group', 'text-'+align]">
            <button class="btn btn-primary" type="button" :disabled="isUpload" @click="choseFile">
                <i :class="{fa: true, 'fa-upload': !isUpload, 'fa-spinner': isUpload, 'fa-spin': isUpload}"></i> {{uploadLabel}}
            </button>
            <input type="file" accept="image/*" :id="id" @change="fileSelected" class="hide" :multiple="isMultiple"/>
        </div>
    </div>
  </div>
</template>

<script>
import modal from './modal'
import media from '@/assets/js/api/media'
export default {
    components: {
        modal
    },
    props: ["id","iscrop","width","height","enableResize","enableOrientation",'align','btnlabel']
    ,
    watch: {
        iscrop () {
            this.cropviewport()
            this.refreshCroppie()
        },
        width () {
            this.cropviewport()
            this.refreshCroppie()
        },
        height () {
            this.cropviewport()
            this.refreshCroppie()
        }
    },
    data () {
        return {
            showCropZone: false,
            showUploadZone: true,
            showModal: false,
            isUpload: false,
            isCroping: false,
            isMultiple: false,
            fileUpload: {},
            viewPort: {
                width: +this.width,
                height: +this.height,
                type: 'square'
            }
        }
    },
    computed: {
        uploadLabel () {
            return this.isUpload ? 'Đang upload hình ...' : this.uploadBtnLabel
        },
        uploadBtnLabel () {
            return this.btnlabel ? this.btnlabel : 'Upload photo'
        }
    },
    methods: {
        cropviewport () {
            this.viewPort.width = +this.width <=0 ? 200: +this.width
            this.viewPort.height = +this.height <= 0 ? 200 : +this.height
        },
        closeCropZone () {
            this.showCropZone = false
            this.showUploadZone = true
            this.isUpload = false
        },
        choseFile () {
            document.getElementById(this.id).click();
        },
        fileSelected (e) {
            const files = e.target.files
            const allFiles = []
            console.log('file chosing')
            this.isUpload = true;
            console.log('process file')
            for (var i = 0; i < files.length; i++) {
                const file = files[i]
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                    const fileInfo = {
                        name: file.name,
                        type: file.type,
                        size: `${Math.round(file.size / 1000)} kB`,
                        base64: reader.result.split(',').pop(),
                        file: file,
                    }
                    allFiles.push(fileInfo)
                    this.fileUpload =  {
                            Base64String: fileInfo.base64,
                            Name: fileInfo.name,
                            IsCrop: false,
                        }

                    //if crop image set -> init croppie
                    if(this.iscrop) {
                        var url = `data:${fileInfo.type};base64,${fileInfo.base64}`
                        this.bindImageToCrop(url)
                        this.showCropZone = true;
                        this.showUploadZone = false;
                    }
                    //upload to server
                    else
                    {
                        this.isUpload = true
                        media.uploadPhoto(this.$authToken, this.fileUpload).then((rs)=> {
                            this.isUpload = false
                            this.$emit('uploadDone', {
                                url: rs.photo.url
                            })
                        })
                    }
                }
            }
            document.getElementById(this.id).value = null
        },
        //croppie
        bindImageToCrop(url) {
            // Randomize cat photos, nothing special here.
            // Just like what we did with .bind({...}) on
            // the mounted() function above.
            this.$refs.croppieRef.bind({
                url: url,
            });
        },
        // CALBACK USAGE
        crop() {
            // Here we are getting the result via callback function
            // and set the result to this.cropped which is being
            // used to display the result above.
            let options = {
                format: 'jpeg'
            }
            this.isCroping = true;
            this.$refs.croppieRef.result(options, (output) => {
                //this.cropped = output;
                var base64string  = output.split(',')[1];
                this.fileUpload.Base64String = base64string
                media.uploadPhoto(this.$authToken, this.fileUpload).then((rs)=> {
                    this.isUpload = false
                    this.$emit('uploadDone', {
                        url: rs.photo.url
                    })
                    this.showCropZone = false
                    this.showUploadZone = true
                    this.isCroping = false;
                })
            });
        },
        // EVENT USAGE
        cropViaEvent() {
            this.$refs.croppieRef.result(options);
        },
        result(output) {
            //this.cropped = output;
            //console.log(output)
        },
        update(val) {
            //console.log(val);
        },
        rotate(rotationAngle) {
            // Rotates the image
            this.$refs.croppieRef.rotate(rotationAngle);
        },
        refreshCroppie () {
            this.$refs.croppieRef.refresh()
        }
    },
    mounted () {

    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 0px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-container.modal-lg {
    width: 90%;
}
.modal-container.modal-md {
    width: 60%;
}
.modal-container.moda-sm {
    width: 40%;
}
.modal-container.moda-xs {
    width: 300px;
}
.modal-header {
  margin-top: 0;
  font-weight: bold;
}

.modal-body {
  margin:0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
